import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import UsersDetails from "./UsersDetails";
import { users } from "../user";
import User from "../components/User";

const UsersListing = () => {
    return (
        <>
            <section className="user-lisitng py-5">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h2>User Directory</h2>
                            <p>Manage and view all regitered platform users in one single page.</p>
                        </Col>
                    </Row>
                    <Row className="users-set pt-3">
                        {users.map((user, id) => {
                            return (
                                <User user={user} key={id} />
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default UsersListing