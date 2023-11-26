/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

function Bouton(props) {
    const { className, size, text, onClick, variant } = props;

    return (
        <Button className={className} onClick={onClick} size={size} variant={variant}>
            {text}
        </Button>
    )
}

export default Bouton;