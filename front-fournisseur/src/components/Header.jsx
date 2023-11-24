import { Outlet } from "react-router-dom";
import "../assets/header.scss";
import VerticalHeader from "./VerticalHeader";

function Header() {
    return (
        <>
            <div className="header__one">
                <div className="header__one__header"> </div>
                <VerticalHeader iconColor="primary"/>
            </div>

            <div className="header__two">
                <div className="header__two__header">

                </div>

                <div className="header__two__content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Header;