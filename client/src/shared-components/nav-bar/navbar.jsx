import { Container } from "@mui/material";
import navbar from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function NavBar () {
    return (
        <Container maxWidth="xl" sx={{
            borderBottom: "1px solid white",
            backdropFilter: "blur(5px)",
            borderRadius: "35px"
        }}>
            <div className={`${navbar.navbarSection}`}>
                <div>
                    <Link to={'/'}>
                        <h2><p>CMS</p></h2>
                    </Link>
                </div>
                <div>
                    <ul>
                        <li><Link to={'/dashboard'}>DASHBOARD</Link></li>
                        <li><Link to={'/pos'}>POS</Link></li>
                        <li><Link to={'/inventory'}>INVENTORY</Link></li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}