import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MayLike.css';

function MayLike() {
  return (
    <div className='main'>
    <h6 style={{textAlign:"left",marginTop:"100px",marginLeft:"110px",fontWeight:"500px"}}>You might also like</h6>
    <Container className='image-container'>
    <Row>
        <Col><img src="https://cdn.dribbble.com/userupload/4274093/file/still-9894d74a24e14a053506fe0fa48780b0.png?compress=1&resize=450x338&vertical=top" alt="" /></Col>
        <Col><img src="https://cdn.dribbble.com/users/2547736/screenshots/17002202/media/2e37e17ff793da65b59530803ac5bd8b.png?compress=1&resize=1000x750&vertical=top" alt="" /></Col>
        <Col><img src="https://cdn.dribbble.com/userupload/4450100/file/original-42d68e3c2a73a9181619a96e7ee7df13.png?compress=1&resize=640x480&vertical=top" alt="" /></Col>
      </Row>
      <Row>
        <Col><img src="https://cdn.dribbble.com/users/1579320/screenshots/16778052/plakhotin5__2_.png?compress=1&resize=640x480&vertical=top" alt="" /></Col>
        <Col><img src="https://cdn.dribbble.com/userupload/3503631/file/original-17780a84789f0de99c2965d614abeba2.png?compress=1&resize=450x338&vertical=top" alt="" /></Col>
        <Col><img src="https://cdn.dribbble.com/userupload/3741461/file/original-c64eebecdb8ed04bb975075ab279d1f1.png?compress=1&resize=450x338&vertical=top" alt="" /></Col>
      </Row>
    </Container>
    </div>
  );
}

export default MayLike;