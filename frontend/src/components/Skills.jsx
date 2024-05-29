import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Row } from 'react-bootstrap';
import java from "../assets/java.png";
import python from "../assets/python.png";
import r from "../assets/r.png";
import js from "../assets/js.png";
import django from "../assets/django.png";
import flask from "../assets/flask.png";
import reactLogo from "../assets/react.png";
import git from "../assets/git.png";
import communication from "../assets/communication.png";
import creativity from "../assets/creativity.png";
import criticalThinking from "../assets/criticalThinking.png";
import problemSolving from "../assets/problemSolving.png";
import teamwork from "../assets/teamwork.png";
import aws from "../assets/aws.png";
import azure from "../assets/azure.png";
import snowflake from "../assets/snowflake.png";
import "../styles/Skills.css"



function Skills() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Over the years, through academic pursuits, professional experiences, and personal hobbies, <br></br>
                                I have developed a diverse set of skills.
                                <br />Below is a summary of my key technological proficiencies and interpersonal abilities.</p>
                            <br></br>
                            <h3>Soft Skills</h3>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={creativity} alt="creativity" />
                                    <h5>Creativity</h5>
                                </div>
                                <div className="item">
                                    <img src={criticalThinking} alt="criticalThinking" />
                                    <h5>Critical Thinking</h5>
                                </div>
                                <div className="item">
                                    <img src={problemSolving} alt="problemSolving" />
                                    <h5>Problem Solving</h5>
                                </div>
                                <div className="item">
                                    <img src={teamwork} alt="teamwork" />
                                    <h5>Teamwork</h5>
                                </div>
                                <div className="item">
                                    <img src={communication} alt="communication" />
                                    <h5>Communication Skills</h5>
                                </div>
                            </Carousel>
                            <br></br>
                            <h3>Cloud</h3>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={aws} alt="aws" />
                                    <h5>AWS</h5>
                                </div>
                                <div className="item">
                                    <img src={azure} alt="azure" />
                                    <h5>Azure</h5>
                                </div>
                                <div className="item">
                                    <img src={snowflake} alt="snowflake" />
                                    <h5>Snowflake</h5>
                                </div>
                            </Carousel>
                            <br></br>
                            <h3>Programming Langauges</h3>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={python} alt='python' />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={r} alt='R' />
                                    <h5>R</h5>
                                </div>
                                <div className="item">
                                    <img src={js} alt='Javascript' />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt='Java' />
                                    <h5>Java</h5>
                                </div>
                            </Carousel>
                            <br></br>
                            <h3>Other Relevant Skills</h3>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={django} alt='django' />
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt='git' />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={reactLogo} alt='React' />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={flask} alt='Flask' />
                                    <h5>Flask</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Skills;
