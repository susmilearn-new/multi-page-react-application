import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import UsersDetails from '../pages/UsersDetails';
import { users } from '../user';

const User = (props) => {
    return (
        <>
            <Col xs={12} md={6} lg={3}>
                <div className="users-box bg-white text-center p-5 my-2">
                    <img src={props.user.image} alt={props.user.name} />
                    <h5 className="fw-semibold pt-2">{props.user.name}</h5>
                    <p>{props.user.designation}</p>
                    <Link to={`/users/${props.user.id}`} element={<UsersDetails />} className="fw-medium">View Profile</Link>
                </div>
            </Col>
        </>
    )
}
export default User