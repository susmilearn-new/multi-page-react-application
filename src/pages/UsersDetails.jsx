import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"
import { users } from "../user";
import Home from "./Home";

const UsersDetails = () => {

    let { id } = useParams();

    const user = users.find((item) =>
        item.id === parseInt(id)
    );
    if (!user) {
        return (
            <>
                <Container className="text-center pt-5 pb-2">
                    <h5>Sorry, No User Found!...</h5>
                    <Link to="/" element={<Home />}> Back to Home</Link>
                </Container>

            </>
        )
    }
    return (
        <>
            <section className="mt-5">
                <Container>
                    <Row>
                        <Col>
                            <Link to="/users" className="fw-bold back-btn p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 544 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-434.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
                                Go Back</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="user-details-section py-5">
                <Container>
                    <Row>
                        <Col xs={12} md={4} lg={4} className="mb-3 mb-md-0">
                            <div className="users-box bg-white text-center pt-5 pb-4">
                                <img src={user.image} alt={user.name} />
                                <h3 className="fw-semibold pt-2">{user.name}</h3>
                                <p>{user.designation}</p>
                            </div>
                        </Col>
                        <Col xs={12} md={8} lg={8}>
                            <div className="information-title px-3 px-lg-5 pt-1 pt-lg-2 py-lg-1">
                                <h4 className="fw-semibold py-3"> More Information</h4>
                            </div>
                            <div className="information-box bg-white px-3 px-lg-5 py-2 py-lg-4">
                                <Row>
                                    <Col xs={12} md={6} className="my-2">
                                        <h6>Full Name:</h6>
                                        <p>{user.name}</p>
                                    </Col>
                                    <Col xs={12} md={6} className="my-2">
                                        <h6>Contact Email:</h6>
                                        <p>{user.email}</p>
                                    </Col>
                                    <Col xs={12} md={6} className="my-2">
                                        <h6>Contact Number:</h6>
                                        <p>{user.phone}</p>
                                    </Col>
                                    <Col xs={12} md={6} className="my-2">
                                        <h6>Location:</h6>
                                        <p>{user.location}</p>
                                    </Col>
                                    <Col className="my-2">
                                        <h6>Administrative Bio:</h6>
                                        <p>{user.bio}</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    );
};
export default UsersDetails