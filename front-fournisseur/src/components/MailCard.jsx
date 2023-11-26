/* eslint-disable react/prop-types */
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Bouton from "./Bouton";
import { useNavigate } from "react-router-dom";

function MailCard(props) {
    const { mail } = props;
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/fournisseur/details_mail", { state : { id : mail.id }});
    }

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
                    {mail.entreprise}
                </Typography>
                   
                <Typography sx={{ fontSize: 15, fontWeight: "lighter", color: "grey"}} pl={3} pt={1}>
                    {mail.objet}
                </Typography>
            </CardContent>

            <CardContent>
                <Typography sx={{ fontSize: 17 }} variant="h2" pl={3} pt={2}>
                    {mail.date}
                </Typography>
                   
                <Typography sx={{ fontSize: 15, fontWeight: "lighter", color: "grey"}} pl={3} pt={1}>
                    {mail.heure}
                </Typography>
            </CardContent>

            <CardActions sx={{marginLeft: 5}}>
                <Bouton 
                    text="Détails" 
                    size="small"
                    onClick={handleClick}
                />
            </CardActions>
        </Card>
    )
}

export default MailCard;