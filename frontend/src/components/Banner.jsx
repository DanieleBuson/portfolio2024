import React from 'react'
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle, FastForward } from "react-bootstrap-icons";
import headerImg from "../assets/header.svg"
import "../styles/Banner.css"

function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Data Scientist", "IT Lead", "Researcher", "Web Developer", "Data Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let FullText = toRotate [i];
        let updatedText = isDeleting ? FullText.substring(0, text.length - 1) : FullText.substring(0, text.length + 1)
        setText(updatedText)
        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }
        if (!isDeleting && updatedText === FullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className='banner' id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>
                            Welcome to DB's portfolio!
                        </span>
                        <h1>{`Hi! I am Daniele `}<br></br><span className='wrap'>{text}</span></h1>
                        <p>I'm a passionate and dynamic Data Science Master’s student with deep mathematical and statistical knowledge, keenly interested in data analysis and machine learning.</p>
                        <a href='#connect'>Let's connect!<ArrowRightCircle size={25} style={{marginLeft:"5px"}}/></a>
                        <br></br>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header IMG" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner