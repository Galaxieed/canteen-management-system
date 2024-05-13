import { Container } from "@mui/material";
import navbar from "./navbar.module.css";

export default function NavBar () {
    return (
        <Container maxWidth="xl" sx={{
            borderBottom: "1px solid white",
            backdropFilter: "blur(5px)",
            borderRadius: "35px"
        }}>
            <div className={`${navbar.navbarSection}`}>
                <div>
                    <h2>CMS</h2>
                </div>
                <div>
                    <ul>
                        <li>DASHBOARD</li>
                        <li>POS</li>
                        <li>INVENTORY</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}