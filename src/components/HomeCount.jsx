import { Col, Container, Row } from "react-bootstrap"
import Count from "./Count"
import { count } from "../count"

const HomeCount = () => {
    return (
        <>
            <section className="home-count py-5">
                <Container className="count-container pt-4 pb-2">
                    <Row className="align-items-center text-center">
                        {count.map((countv, index) => {
                            return (
                                <Count count={countv} key={index} />
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default HomeCount