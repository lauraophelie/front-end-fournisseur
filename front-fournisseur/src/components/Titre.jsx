/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

function Titre(props) {
    const { variant, text, fontSize, textAlign } = props;

    return (
        <Typography variant={variant} sx={{ fontSize: fontSize, textAlign: textAlign  }}>
            {text}
        </Typography>
    )
}

export default Titre;