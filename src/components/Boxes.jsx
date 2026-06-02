import Col from 'react-bootstrap/Col';
import { boxes } from '../boxes';

const Boxes = (props) => {
    return (
        <>
            <Col xs={12} md={4}>
                <div className="redirection-box p-3 p-lg-4 mb-3 mb-md-0">
                    <img src={props.box.image} alt={props.box.title} />
                    <h4 className="fw-semibold pt-4 pb-1">{props.box.title}</h4>
                    <p>{props.box.description}</p>
                </div>
            </Col>
        </>
    )
}
export default Boxes