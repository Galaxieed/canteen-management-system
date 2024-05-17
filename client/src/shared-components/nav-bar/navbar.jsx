import { Container } from "@mui/material";
import navbar from "./navbar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBar (props) {
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
                        <li className={props.data == 'dashboard' ? `${navbar.activelink}` : undefined}><Link to={'/dashboard'}>DASHBOARD</Link></li>
                        <li className={props.data == 'pos' ? `${navbar.activelink}` : undefined}><Link to={'/pos'}>POS</Link></li>
                        <li className={props.data == 'inventory' ? `${navbar.activelink}` : undefined}><Link to={'/inventory'}>INVENTORY</Link></li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

NavBar.propTypes = {
    data: PropTypes.any
}