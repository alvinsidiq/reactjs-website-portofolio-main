import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { DiCodeigniter } from "react-icons/di";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>Saya  sangat  menyukai  dunia  front-end development  karena  saya  bisa  menghidupkan  desain  dan  memberikan  pengalaman  digital  yang  menyenangkan bagi  pengguna.  </p>
                <p>Kreativitas  dan  keinginan  untuk  terus  belajar  adalah  modal  utama  saya  dalam  mengembangkan  website  yang  user-friendly  dan  menarik.</p>
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss />
                    <FaGolang /><FaBootstrap /><DiCodeigniter /><FaGit />

                </div>
            </div>
        </section>
    )
}

export default About