import Liste from "../components/Liste";
import { createData, getHeader } from "../components/Utilities";
import "../assets/element.scss";
import Titre from "../components/Titre";

function ListeArticles() {
    const data = [
        {
            categorie: "Matériel de bureau",
            designation: "Bloc-note"
        },
        {
            categorie: "Matériel de bureau",
            designation: "Lampe"
        },
        {
            categorie: "Matériel de bureau",
            designation: "Stylo"
        },
        {
            categorie: "Matériel de bureau",
            designation: "Stylo à bille"
        },
        {
            categorie: "Matériel de bureau",
            designation: "Crayon"
        },
        {
            categorie: "Matériel de bureau",
            designation: "Pinceau"
        }
    ];
    const listeArticles = createData(Object.keys(data[0]));
    const header = getHeader(listeArticles);

    return (
        <div className="articles">
            <div className="articles__header">
                <Titre text="Liste des articles" fontSize="24px" variant="h3" />
            </div>
            <div className="articles__liste">
                <Liste rows={data} keys={header} pagination={true} width={"95%"} />
            </div>
        </div>
    )
}

export default ListeArticles;