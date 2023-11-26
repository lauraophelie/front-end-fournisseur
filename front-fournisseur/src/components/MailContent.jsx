import { CardContent, Typography } from "@mui/material";
import "../assets/mail.scss";

function MailContent(props) {
    const { idMail } = props;

    return (
        <>
            <div className="details-mails__infos">
                <CardContent sx={{ width: 750, float: "left"}}>
                    <Typography sx={{ fontSize: 17 }} variant="h2" pl={3} pt={2}>
                        Entreprise 
                    </Typography>
                    
                    <Typography sx={{ fontSize: 15, fontWeight: "lighter", color: "grey"}} pl={3} pt={1}>
                        Objet 
                    </Typography>
                </CardContent>

                <CardContent sx={{ marginLeft: "30%"}}>
                    <Typography sx={{ fontSize: 17 }} variant="h2" pl={3} pt={2}>
                        Date
                    </Typography>
                    
                    <Typography sx={{ fontSize: 15, fontWeight: "lighter", color: "grey"}} pl={3} pt={1}>
                        Heure
                    </Typography>
                </CardContent>
            </div>
            <div className="details-mail__content">
                
            </div>
        </>
    )
}

export default MailContent;