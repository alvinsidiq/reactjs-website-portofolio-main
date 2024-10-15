
import Malvin from'../assets/Malvin.png'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import '../styles/Header.css'
function Header() {
    return (
        <header>
            <div className="header-jumbotron">
            <img src={Malvin}  />
                <h3>Muhammad Alvin Sidiq</h3>
                <p>Programmer Frond-End Development </p>
                <div className='socialMedia'>
                    <a href="https://www.instagram.com/alvinsidiq7" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@alvinsidiq7?lang=en" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammadalvinsidiq/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
                     </a>
                     <a href="https://github.com/alvinsidiq" target="_blank" rel="noopener noreferrer">
                <FaGithub />
                     </a>
                </div>
            </div>
        </header>
    )
}

export default Header
