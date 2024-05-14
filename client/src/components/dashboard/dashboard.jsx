import dashboard from './dashboard.module.css';
import Container from '@mui/material/Container';
import NavBar from '../../shared-components/nav-bar/navbar'

export default function Dashboard() {
    return (
        <div className={`${dashboard.dashboardBody}`}>
            <NavBar />
            <Container>
                <p>Dashboard</p>
            </Container>
        </div>
    )
}