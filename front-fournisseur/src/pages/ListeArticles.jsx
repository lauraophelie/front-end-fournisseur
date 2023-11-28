import Liste from "../components/Liste";
import { createData, getHeader } from "../components/Utilities";
import "../assets/element.scss";
import Titre from "../components/Titre";
import axios from "axios";
import { useEffect, useState } from "react";

function ListeArticles() {
    const [data, setData] = useState(null);
    const [header, setHeader] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlRequest = "http://localhost:8080/api/fournisseur/article";
                const response = await axios.get(urlRequest);

                const listeArticles = response.data.map((item) => ({
                    ...item,
                    id: item.id,
                    categorie: item.categorie.nom,
                    designation: item.designation,
                }));
                
                setData(listeArticles);

                const liste = createData(Object.keys(listeArticles[0]));
                const head = getHeader(liste);

                setHeader(head);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    if (!data) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <div className="articles">
            <div className="articles__header">
                <Titre text="Liste des articles" fontSize="24px" variant="h3" textAlign="center" />
            </div>
            <div className="articles__liste">
                <Liste rows={data} keys={header} pagination={true} width={"95%"} />
            </div>
        </div>
    );
}

export default ListeArticles;
