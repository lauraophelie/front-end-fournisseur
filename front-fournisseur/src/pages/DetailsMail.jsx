import { useLocation } from "react-router-dom";
import MailContent from "../components/MailContent";
import "../assets/mail.scss";

function DetailsMail() {
    const location = useLocation();
    const idMail = location.state.id;

    return (
        <div className="details-mail">
            <MailContent idMail={idMail} />
        </div>
    )
}

export default DetailsMail;