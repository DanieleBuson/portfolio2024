import React, {useState, useEffect} from 'react';
import api from "../api"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/color-sharp2.png"
import "../styles/Experiences.css"
import EducationCard from './EducationCard';
import WorkCard from './WorkCard';


function Experiences() {

    const [projects, setProjects] = useState([]);
    const [works, setWorks] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        api.get('/api/projects/')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching projects', error));

        api.get('/api/works/')
            .then(response => setWorks(response.data))
            .catch(error => console.error('Error fetching works', error));

        api.get('/api/education/')
            .then(response => setEducation(response.data))
            .catch(error => console.error('Error fetching education', error));

        console.log(`Projects: ${projects}`)
        console.log(`Works:${works}`)
        console.log(`Education ${education}`)
    }, []);


    return (
        <section className='experiences' id="experiences">
            <Container>
                <Row className='experiences-bx'>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Projects</h2>
                            <p>This collection showcases projects from my professional work experiences and academic endeavors, highlighting a diverse range of skills and innovative solutions.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Work</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Education</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Projects</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                works.map((work, index) => {
                                                    return <WorkCard key={index} {...work} />
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                                education.map((ed, index) => {
                                                    return <EducationCard key={index} {...ed} />
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return <ProjectCard key={index} {...project} />
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}></img>
        </section>
    )
}

export default Experiences