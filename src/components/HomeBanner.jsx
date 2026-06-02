import { Col, Container, Row } from "react-bootstrap"

const HomeBanner = () => {
    return (
        <>
            <section className="home-banner py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <h6 className="primary-text pb-2">OPERATIONAL HARMONY</h6>
                            <h1 className="fw-semibold">Welcome to the <span className="primary-text">User Management Portal</span></h1>
                            <p>Streamline your administrative workflow with our integrated suite of team
                                oversight tools. Manage permissions, monitor activity, and optimize team
                                efficiency from a centralized, secure dashboard.</p>
                        </Col>
                        <Col xs={12} md={6} className="pt-3 pt-md-0">
                            <img src="./public/banner-image.webp" alt="home-banner" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default HomeBanner