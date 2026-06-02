import Col from 'react-bootstrap/Col';
import { count } from '../count';

const Count = (props) => {

    return (
        <>
            <Col xs={6} md={3}>
                <div className="counter-set">
                    <h2 className="fw-bold">{props.count.cvalue}</h2>
                    <p>{props.count.name}</p>
                </div>
            </Col>

        </>
    )
}
export default Count