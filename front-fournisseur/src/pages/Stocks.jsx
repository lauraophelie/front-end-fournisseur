import Liste from "../components/Liste";
import Titre from "../components/Titre";
import { createData, getHeader } from "../components/Utilities";

function Stocks() {
    const stocks = [
        {
            date: "2023-10-15",
            article: "Stylo",
            quantite: 50,
            prixUnitaire: 250
        },
        {
            date: "2023-10-15",
            article: "Stylo",
            quantite: 50,
            prixUnitaire: 250
        },
        {
            date: "2023-10-15",
            article: "Stylo",
            quantite: 50,
            prixUnitaire: 250
        }
    ];
    const listeStocks = stocks.map((item) => ({
        ...item,
        montant: item.quantite * item.prixUnitaire
    }));

    const data = createData(Object.keys(listeStocks[0]));
    const header = getHeader(data);
    console.log(listeStocks);

    return (
        <div className="stocks">
            <div className="stocks__header">
                <Titre variant="h2" text="Stocks" fontSize="24px" textAlign="center" />
            </div>

            <div className="stocks__liste">
                <Liste rows={listeStocks} keys={header} pagination={true} width={"95%"}/>
            </div>
        </div>
    )
}

export default Stocks;