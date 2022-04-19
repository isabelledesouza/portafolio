import { Link } from 'react-router-dom'
import LogoTitle from '../Home/images/i.png'
import AnimatedLetter from "../AnimatedLetter"
import 'animate.css'
import './index.scss'

const Home = () => {
    return (
        <div className="container container-flex home-page">
            <div className="text-zone">
                <h1> Hi <br/> I'm
                    <img src={LogoTitle} alt="developer"/>
                        sabelle 
                </h1>
                <h2>front-end developer</h2>
                <Link to="/contact" className='flat-button'>Let's get in touch</Link>

            </div>
        </div>


    
    );
}



export default Home;