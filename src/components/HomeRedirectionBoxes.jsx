import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { linkBoxes } from "../linkBoxes"
import LinkBoxes from "./LinkBoxes"

const HomeRedirectionBoxes = () => {
    return (
        <>
            <section className="home-boxes py-3 py-lg-5">
                <Container>
                    <Row className="align-items-center">
                        {linkBoxes.map((lbox, index) => {
                            return (<LinkBoxes linkBoxes={lbox} key={index} />)
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default HomeRedirectionBoxes