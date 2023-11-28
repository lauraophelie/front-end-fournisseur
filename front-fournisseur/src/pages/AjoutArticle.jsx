import { useEffect, useState } from "react";
import Bouton from "../components/Bouton";
import DropDown from "../components/DropDown";
import TextInput from "../components/TextInput";
import Titre from "../components/Titre";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AjoutArticle() {
    const inputWidth = "100%";

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlRequest = "http://localhost:8080/api/fournisseur/categories";
                const response = await axios.get(urlRequest);

                setCategories(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const [article, setArticle] = useState({
        designation: "",
        categorie: 0
    });

    const handleChange = (name, event) => {
        console.log(`Setting ${name} to:`, event.target.value);
        setArticle(prevState => ({
            ...prevState,
            [name]: event.target.value
        }));
      };      

    useEffect(() => {
        console.log(article);
    }, [article]);

    const navigate = useNavigate();

    const insertArticle = async (e) => {
        e.preventDefault();

        const art = {
            designation: article.designation,
            categorie: {
                id: article.categorie
            }
        }
        console.log(JSON.stringify(art));
        try {
            const response = await axios.post("http://localhost:8080/api/fournisseur/article", art);
            console.log(response);

            navigate("/fournisseur/articles");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="ajout-article">
            <div className="ajout-article__header">
                <Titre text="Ajouter un article" fontSize="24px" variant="h3" textAlign="center" />
            </div>

            <div className="ajout-article__form">
                <div className="ajout-article__form--input">
                    <TextInput 
                        label="Désignation"
                        type="text"
                        required={true}
                        width={inputWidth}
                        onChange={(value) => handleChange("designation", value)}
                    />
                </div>

                <div className="ajout-article__form--select">
                    <DropDown 
                        data={categories}
                        label="Catégorie"
                        required={true}
                        width={inputWidth}
                        onChange={(value) => handleChange("categorie", value)}
                    />
                </div>

                <div className="ajout-article__form--submit">
                    <Bouton 
                        className="ajout-article__form__button"
                        variant="contained"
                        text="Ajouter"
                        onClick={insertArticle}
                    />
                </div>
            </div>
        </div>
    )
}

export default AjoutArticle;
