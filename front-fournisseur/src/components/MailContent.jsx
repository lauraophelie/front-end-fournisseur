/* eslint-disable react/prop-types */
import { CardContent, Typography } from "@mui/material";
import "../assets/mail.scss";
import { createData, getHeader } from "./Utilities";
import Liste from "./Liste";

function MailContent(props) {
    const { idMail } = props;

    const mail = {
        id: idMail,
        entreprise: "DIMPEX",
        objet: "Demande de proforma",
        date: "2023-11-30",
        heure: "15:00:00",
        articles: [
            {
                categorie: "Matériel informatique",
                article: "Disque dur",
                quantite: 50
            },
            {
                categorie: "Matériel informatique",
                article: "Clé USB",
                quantite: 50
            },
            {
                categorie: "Matériel de bureau",
                article: "Bloc-notes",
                quantite: 50
            }
        ]
    };

    const articles = mail.articles;
    const data = createData(Object.keys(articles[0]));
    const header = getHeader(data);

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
            <hr />
            <div className="details-mail__content">
                <Liste rows={articles} keys={header} pagination={false} />
            </div>
        </>
    )
}

export default MailContent;