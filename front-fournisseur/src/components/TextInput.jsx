/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

function TextInput(props) {
    const { label, required, value, type, className, width, onChange } = props;

    return (
        <TextField 
            label={label} 
            value={value}
            type={type}
            required={required}
            className={className}
            sx={{ width: width }}
            onChange={onChange}
        />
    )
}

export default TextInput;