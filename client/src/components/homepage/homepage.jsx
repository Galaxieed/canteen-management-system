import Container from '@mui/material/Container';
import homepage from './homepage.module.css';
import Footer from '../../shared-components/footer/footer';
import NavBar from '../../shared-components/nav-bar/navbar';

export default function Homepage() {
    return (
        <>
            <NavBar />
            <div className={`${homepage.homepageSection}`}>
                <Container>
                    <div className={`${homepage.gridContainer}`}>
                        <div>
                            <img src="./src/assets/logo.png" alt="LOGO" className={`${homepage.logo}`} />
                            <h2 className={`${homepage.slogan}`}>Delight in Every Bite!</h2>
                        </div>
                        <div>
                            <div className={`${homepage.formContainer}`}>
                                <form action="">
                                    <input type="email" placeholder='Email or Username' />
                                    <input type="password" placeholder='Password' />
                                    <button type='submit'>LOGIN</button>
                                </form>
                                <a href="">Forgot Password</a>
                                <hr />
                                <button>Create new Account</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div> 
            <Footer />  
        </>
    )
}