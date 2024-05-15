import dashboard from './dashboard.module.css';
import Container from '@mui/material/Container';
import NavBar from '../../shared-components/nav-bar/navbar'
import Grid from '@mui/material/Grid';
import MyLineChart from '../../shared-components/line-chart/line-chart';
import MyGauge from '../../shared-components/gauge/gauge';

export default function Dashboard() {
    return (
        <div className={`${dashboard.dashboardBody}`}>
            <NavBar />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h2>DASHBOARD</h2>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <h3>Sales Chart</h3>
                        <MyLineChart data={'haha'}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <h3>Inventory</h3>
                        <MyGauge data={'awdaw'}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt repellat vitae magni deleniti consequatur laudantium fugit consectetur ipsum qui porro nisi amet, provident excepturi facere quia praesentium officiis quasi ab.</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}