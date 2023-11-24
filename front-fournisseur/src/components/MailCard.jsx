import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Bouton from "./Bouton";

function MailCard() {
    return (
        <Card 
            sx={
                {
                    display: 'flex', 
                    width: 1050,
                    marginTop: 5,
                    borderRadius: 0,
                    height: 125,
                    border: '1px solid lightgray',
                    boxShadow: 'none',
                }
            }
        >
            <CardContent sx={{ width: 750 }}>
                <Typography sx={{ fontSize: 17 }} variant="h2" pl={3} pt={2}>
                    Nom entreprise
                </Typography>
                   
                <Typography sx={{ fontSize: 15, fontWeight: "lighter", color: "grey"}} pl={3} pt={1}>
                    Objet du mail
                </Typography>
            </CardContent>

            <CardContent>
                <Typography sx={{ fontSize: 17 }} variant="h2" pl={3} pt={2}>
                    Date
                </Typography>
                   
                <Typography sx={{ fontSize: 15, fontWeight: "lighter", color: "grey"}} pl={3} pt={1}>
                    Heure
                </Typography>
            </CardContent>

            <CardActions sx={{marginLeft: 5}}>
                <Bouton text="Détails" size="small"/>
            </CardActions>
        </Card>
    )
}

export default MailCard;