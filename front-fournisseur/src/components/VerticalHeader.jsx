import { Drafts, ExpandLess, ExpandMore, Folder, HorizontalRule, Inventory, ListAlt } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import "../assets/header.scss";

function VerticalHeader(props) {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    }

    const { iconColor } = props

    return (
        <List
            component="nav"
            className="header__one--liste"
        >
            <ListItemButton>
                <ListItemIcon color={iconColor}>
                    <ListAlt />
                </ListItemIcon>

                <ListItemText primary="Articles" />
                { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 5}}>
                        <ListItemIcon color={iconColor}>
                            <HorizontalRule />
                        </ListItemIcon>
                        <ListItemText primary="Liste des articles"/>
                    </ListItemButton>

                    <ListItemButton sx={{pl: 5}}>
                        <ListItemIcon color={iconColor}>
                            <HorizontalRule />
                        </ListItemIcon>
                        <ListItemText primary="Ajouter un article"/>
                    </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton>
                <ListItemIcon color={iconColor}>
                    <Inventory />
                </ListItemIcon> 
                <ListItemText primary="Stocks" />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon color={iconColor}>
                    <Drafts />
                </ListItemIcon>

                <ListItemText primary="Mail" />
                { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 5}}>
                        <ListItemIcon>
                            <HorizontalRule />
                        </ListItemIcon>
                        <ListItemText primary="Reçus"/>
                    </ListItemButton>

                    <ListItemButton sx={{pl: 5}}>
                        <ListItemIcon>
                            <HorizontalRule />
                        </ListItemIcon>
                        <ListItemText primary="Envoyés"/>
                    </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton>
                <ListItemIcon color={iconColor}>
                    <Folder />
                </ListItemIcon>
                <ListItemText primary="Informations" />
            </ListItemButton>
        </List>
    )
}

export default VerticalHeader;