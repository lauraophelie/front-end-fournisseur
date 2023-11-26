import Bouton from "../components/Bouton";
import DropDown from "../components/DropDown";
import TextInput from "../components/TextInput";
import Titre from "../components/Titre";

function AjoutArticle() {
    const categories = [
        { id: "CAT1", title: "Matériel informatique"},
        { id: "CAT2", title: "Matériel de bureau"},
        { id: "CAT3", title: "Mobilier"}
    ]

    const inputWidth = "100%";

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
                    />
                </div>

                <div className="ajout-article__form--select">
                    <DropDown 
                        data={categories}
                        label="Catégorie"
                        required={true}
                        width={inputWidth}
                    />
                </div>

                <div className="ajout-article__form--submit">
                    <Bouton 
                        className="ajout-article__form__button"
                        variant="contained"
                        text="Ajouter"
                    />
                </div>
            </div>
        </div>
    )
}

export default AjoutArticle;