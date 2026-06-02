import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const AboutBanner = () => {
    return (
        <>
            <section className="about-banner py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <h6 className="primary-text p-2 m-0">MISSION STATEMENT</h6>
                            <h1 className="fw-semibold mt-3">Operational Harmony for User management</h1>
                            <p className="mb-5">UserPortal is the definitive ecosystem for mordern user administration.
                                We transform complex data maangement into a seamless, high velocity workflow,
                                empowering administration with the clarity needed to make critical decisions.</p>
                            <Link to="/" className="fw-bold back-btn p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 544 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-434.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
                                Back to Home</Link>
                        </Col>
                        <Col xs={12} md={6} className="pt-5 pt-md-0">
                            <img src="./public/Unlock.webp" alt="about-banner" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default AboutBanner