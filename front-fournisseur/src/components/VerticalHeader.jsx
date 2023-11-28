/* eslint-disable react/prop-types */
import { Drafts, ExpandLess, ExpandMore, Folder, HorizontalRule, Inventory, ListAlt } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import "../assets/header.scss";
import { Link } from "react-router-dom";

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
            sx={{ fontSize: "15px" }}
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
                    <Link to="/fournisseur/articles">
                        <ListItemButton sx={{pl: 5}}>
                            <ListItemIcon color={iconColor}>
                                <HorizontalRule />
                            </ListItemIcon>
                            <ListItemText primary="Liste des articles"/>
                        </ListItemButton>
                    </Link>

                    <Link to="/fournisseur/ajout_article">
                        <ListItemButton sx={{pl: 5}}>
                            <ListItemIcon color={iconColor}>
                                <HorizontalRule />
                            </ListItemIcon>
                            <ListItemText primary="Ajouter un article"/>
                        </ListItemButton>
                    </Link>
                </List>
            </Collapse>

            <Link to="/fournisseur/stocks">
                <ListItemButton>
                    <ListItemIcon color={iconColor}>
                        <Inventory />
                    </ListItemIcon> 
                    <ListItemText primary="Stocks" />
                </ListItemButton>
            </Link>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon color={iconColor}>
                    <Drafts />
                </ListItemIcon>

                <ListItemText primary="Mail" />
                { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/fournisseur/mail">
                        <ListItemButton sx={{pl: 5}}>
                            <ListItemIcon>
                                <HorizontalRule />
                            </ListItemIcon>
                            <ListItemText primary="Reçus"/>
                        </ListItemButton>
                    </Link>

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