import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Boxes from "./Boxes"
import { boxes } from "../boxes"

const AboutBoxes = () => {
    return (
        <>
            <section className="about-boxes py-3 py-lg-5">
                <Container className="about-boxes-top">
                    <Row className="pb-4">
                        <Col className="text-center">
                            <h3>Engineered for Administrator</h3>
                            <p>Our tools are built to handle the scale and complexity of mordern organisational structures without sacrificing perfomance or clarity.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        {boxes.map((box, index) => {
                            return <Boxes box={box} key={index} />
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default AboutBoxes