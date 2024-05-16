import dashboard from './dashboard.module.css';
import Container from '@mui/material/Container';
import NavBar from '../../shared-components/nav-bar/navbar'
import Grid from '@mui/material/Grid';
import MyLineChart from '../../shared-components/line-chart/line-chart';
import MyGauge from '../../shared-components/gauge/gauge';
import Footer from '../../shared-components/footer/footer';

export default function Dashboard() {
    return (
        <div className={`${dashboard.dashboardBody}`}>
            <NavBar />
            <Container>
                <Grid container spacing={2} my={5}>
                    <Grid item xs={12}>
                        <div className={`${dashboard.welcomeContainer}`}>
                            <div>
                                <img src="https://th.bing.com/th/id/OIP.rjuV5M4ltMka_nKHuQz4qAHaHt?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                            </div>
                            <h2>Welcome <br /> <span>User!</span></h2>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <h3>Sales Chart</h3>
                        <MyLineChart data={'haha'}/>
                        <button className={`${dashboard.printButton}`}>Print Sales</button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <h3>Inventory</h3>
                        <MyGauge data={'awdaw'}/>
                        <button className={`${dashboard.printButton}`}>Print Inventory</button>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}