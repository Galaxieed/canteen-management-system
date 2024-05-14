import { Container } from "@mui/material";
import footer from './footer.module.css';
import CopyrightIcon from '@mui/icons-material/CopyrightOutlined';
import currentYear from "../../services/getYear";

export default function Footer() {
    return (
        <Container>
            <div className={`${footer.footerSection}`}>
                <CopyrightIcon />
                <p>Galaxieed {currentYear}</p>
            </div>
        </Container>
    )
}