import Col from 'react-bootstrap/Col';
import { linkBoxes } from '../linkBoxes';
import { Link } from 'react-router-dom';

const LinkBoxes = (props) => {
    return (
        <>
            <Col xs={12} md={6} lg={4}>
                <div className="redirection-box p-4 mb-3 mb-md-0">
                    <img src={props.linkBoxes.image} alt={props.linkBoxes.title} />
                    <h4 className="fw-semibold pt-4 pb-1">{props.linkBoxes.title}</h4>
                    <p>{props.linkBoxes.description}</p>
                    <Link to={props.linkBoxes.link}>{props.linkBoxes.button} </Link>
                </div>
            </Col>
        </>
    )
}
export default LinkBoxes