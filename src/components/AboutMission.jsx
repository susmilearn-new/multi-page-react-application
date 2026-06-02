import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const AboutMission = () => {
    return (
        <>
            <section className="about-mission py-3 py-lg-5">
                <Container className="mission-container text-center  py-5">
                    <Row>
                        <Col>
                            <h4 className="fw-semibold text-white">Our Mission</h4>
                            <p className="text-white"><i>"To provide the world's most reliable and intuitive administrative interface,
                                ensuring that complex data operations neevr stand in the way of organisational progress"</i></p>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default AboutMission