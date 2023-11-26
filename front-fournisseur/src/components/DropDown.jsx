import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

/* eslint-disable react/prop-types */
function DropDown(props) {
    const { data, label, value, onChange, required, className, width } = props;

    return (
        <Box className={className} sx={{ width: width }}>
            <FormControl required={required} fullWidth>
                <InputLabel> {label} </InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                >
                    {data.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default DropDown;