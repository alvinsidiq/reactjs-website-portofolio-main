import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SiGooglecloud } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'



function Experience() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <h1>Experience</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2024 - present"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<SiGooglecloud/>}
                    >
                        <h3 className="vertical-timeline-element-title">Student cloud computing </h3>
                        <h4 className="vertical-timeline-element-subtitle">di Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka</h4>
                        <p>
                        Sistem Operasi Cloud, Jaringan Cloud,Storage Cloud, Database Cloud, Big Data dan Analytics,Keamanan Cloud
                        </p>
                    </VerticalTimelineElement>
                   
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2024"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaGolang />}
                    >
                        <h3 className="vertical-timeline-element-title">Student GO-lang Learning Path</h3>
                        <h4 className="vertical-timeline-element-subtitle">CODEPOLITAN</h4>
                        <p>
                        Pengenalan Go,Sintaks Dasar,Packages dan Modules,Concurrency,Input/Output,Error Handling,enerapan  dan  Pengembangan.


                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023 - 2024"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaNodeJs />}
                    >
                        <h3 className="vertical-timeline-element-title">Student Pengembangan Front End and Back-End Development </h3>
                        <h4 className="vertical-timeline-element-subtitle">Dicoding Indonesia </h4>
                        <p>
                        Desain web responsif,User interface (UI), Accessibility, Git, OTesting dan Debugging,Bahasa Pemrograman Dasar
                        </p>
                    </VerticalTimelineElement>
                    
                </VerticalTimeline>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Experience