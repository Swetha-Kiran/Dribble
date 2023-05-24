import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Profile.css";

function Profile() {
  return (
    <div className='main'>
    <h6>More by Purrweb UI/UX Agency<a href="" style={{float:"right",color:"#ea4c89"}}>View profile</a></h6>
    

    <Container>
      <Row>
        <Col><img src="https://cdn.dribbble.com/userupload/5037484/file/still-e6fab2016e185041437f5da9f88696e7.png?compress=1&resize=450x338&vertical=top" alt="" /></Col>
        <Col><img src="https://cdn.dribbble.com/userupload/6289738/file/still-4ce095162b67af6f466e322cdd741708.png?compress=1&resize=450x338&vertical=top" alt="" /></Col>
        <Col><img src="https://cdn.dribbble.com/users/5031392/screenshots/15999754/media/19c210de8041bad637c68c0e43db7771.png?compress=1&resize=450x338&vertical=top" alt="" /></Col>
        <Col><img src="https://cdn.dribbble.com/users/5031392/screenshots/16443110/media/0b66b2db8a4aea11adf23ba352dfc0eb.png?compress=1&resize=450x338&vertical=top" alt="" /></Col>
      </Row>
    </Container>
    </div>
  );
}

export default Profile;