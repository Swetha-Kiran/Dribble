
import Button from 'react-bootstrap/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Hire()
{
    return (
        <>
        <img src="https://cdn.dribbble.com/users/5031392/avatars/small/944b08efb66577ba400d5838490ea5b9.png?1597658879" alt="" 
            style={{width:"72px",height:"72px",margin:"0 24px",borderRadius:"50%",marginTop:"50px"}}/>
            <hr/>
            <h3 style={{marginTop:"25px"}}>Purrweb UI/UX Agency</h3>
              <p>We Design Mindful Interfaces for Web & Mobile</p>
              <Button variant="danger" style={{backgroundColor:"#ea4c89"}}><MailOutlineIcon />  Hire Us</Button>
              
        </>
    )
}


export default Hire;