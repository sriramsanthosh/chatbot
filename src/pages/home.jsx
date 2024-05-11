import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const Navigate = useNavigate();
    return (
        <div className="home-container" style={{
            paddingTop: "100px",
            width: "100%",
            position: "relative"

        }}>
            <div style={{
                paddingTop: "80px",
                maxWidth: "500px",
                margin: "auto"
            }}>

                <h1 className='sedan-regular' style={{ margin: "0", textAlign: "center", fontSize: "50px" }}>Welcome to Medical Advisor Platform</h1>
                <div className='ubuntu-regular' style={{ textAlign: "center", margin: "20px 0" }}>Book an appointment with doctor & talk to our Chatbot</div>
                <div style={{ textAlign: "center", margin: "20px 0" }}>

                    <NavLink to="https://wa.me/9346158861?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" text="I'm%20interested%20in%20your%20car%20for%20sale"><Button style={{ margin: "10px" }} variant="contained" color="success">
                        Book an Appointment
                    </Button></NavLink> &nbsp;
                    <Button variant="contained" color="error" onClick={(e) => {
                        e.preventDefault();
                        Navigate("/chatbot")
                    }}>
                        Talk to Chatbot
                    </Button>
                </div>

            </div>

            <div style={{ margin: "20px" }}> &nbsp; </div>
            <div className='banner-img'></div>
            <div className='text-center' style={{ padding: "80px 0", paddingBottom:"20px" }}>
                <b><i style={{ fontSize: "35px", color: "whitesmoke", background:"gray"}}><span style={{backgroundColor:"lightgrey"}}>&nbsp;</span>The greatest wealth is health..</i></b>
            </div>

            <div style={{ textAlign: "center", margin: "20px 0" }}>
                    <Button variant="contained" color="error" onClick={(e) => {
                        e.preventDefault();
                        Navigate("/chatbot")
                    }}>
                        Talk to Chatbot
                    </Button>
                </div>

            <div className='text-center ubuntu-regular' style={{padding:"20px 0"}}>&copy;2024 Medical Advisor. All Rights Reserved.</div>
        </div>
    )
}

export default Home;
