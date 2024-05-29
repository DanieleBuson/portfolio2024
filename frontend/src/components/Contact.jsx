import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import email from "../assets/email.svg"
import "../styles/Contact.css"
import api from '../api'

function Contact() {

    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }
    
    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState("Send")
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }

    useEffect(() => {
        if (status.message !== '') {
            const timer = setTimeout(() => {
                setStatus({ message: '', success: false });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setButtonText('Sending...');
        
        api.post('api/send-email/', formDetails)
            .then(response => {
                if (response.data.success) {
                    setStatus({ message: 'Email sent successfully!', success: true });
                    setFormDetails({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        message: ""
                    });
                } else {
                    setStatus({ message: 'Failed to send email.', success: false });
                }
            })
            .catch(error => {
                console.error('Error sending email:', error);
                setStatus({ message: 'Failed to send email. Please try again later.', success: false });
            })
            .finally(() => {
                setButtonText('Send');
            });
    };
    
    return (
        <section className='contact' id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={email} alt="Email Icon" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type='text' value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder="Email address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type='tel' value={formDetails.phone} placeholder="Phone number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea rows="6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {status.message &&
                                    <Col>
                                        <p className={`alert ${status.success ? "alert-success" : "alert-danger"}`}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact