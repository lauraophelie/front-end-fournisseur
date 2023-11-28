/* eslint-disable react/jsx-key */
import MailCard from "../components/MailCard";

function BoiteMail() {
    const data = [
        {
            id: "MAIL0001",
            entreprise: "DIMPEX",
            objet: "Demande de Proforma",
            date: "2023-11-26",
            heure: "15:00:00"
        },
        {
            id: "MAIL0001",
            entreprise: "DIMPEX",
            objet: "Demande de Proforma",
            date: "2023-11-28",
            heure: "08:30:00"
        },
        {
            id: "MAIL0003",
            entreprise: "DIMPEX",
            objet: "Demande de Proforma",
            date: "2023-11-30",
            heure: "08:30:00"
        }
    ] 

    return (
        <>
            {data.map((item) => (
                <MailCard mail={item} />
            ))}
        </>
    )
}

export default BoiteMail;