/* eslint-disable react/prop-types */
import { CardContent, Typography } from "@mui/material";
import "../assets/mail.scss";

function MailContent(props) {
    const { idMail } = props;

    const mail = {
        id: idMail,
        entreprise: "DIMPEX",
        objet: "Demande de proforma",
        date: "2023-11-30",
        heure: "15:00:00",
        article: [
            {
                categorie: "Matériel informatique",
                article: "Disque dur",
                quantite: 50
            },
            {
                categorie: "Matériel informatique",
                article: "Clé USB",
                quantite: 50
            }
        ]
    };

    return (
        <>
            <div className="details-mails__infos">
                <CardContent sx={{ width: 750, float: "left"}}>
                    <Typography sx={{ fontSize: 17 }} variant="h2" pl={3} pt={2}>
                        {mail.entreprise}
                    </Typography>
                    
                    <Typography sx={{ fontSize: 15, fontWeight: "lighter", color: "grey"}} pl={3} pt={1}>
                        {mail.objet}
                    </Typography>
                </CardContent>

                <CardContent sx={{ marginLeft: "30%"}}>
                    <Typography sx={{ fontSize: 17 }} variant="h2" pl={3} pt={2}>
                        {mail.date}
                    </Typography>
                    
                    <Typography sx={{ fontSize: 15, fontWeight: "lighter", color: "grey"}} pl={3} pt={1}>
                        {mail.heure}
                    </Typography>
                </CardContent>
            </div>
            <div className="details-mail__content">
                
            </div>
        </>
    )
}

export default MailContent;