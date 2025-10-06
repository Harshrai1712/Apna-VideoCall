import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField, Box, Avatar } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import LogoutIcon from '@mui/icons-material/Logout';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>

            <div className="navBar">

                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <Box
                        component="img"
                        src="/logo3.png"
                        alt="Apna VideoCall"
                        sx={{
                            width: '50px',
                            height: 'auto',
                            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.2))',
                        }}
                    />
                    <h2 style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 800,
                        fontSize: '1.8rem',
                    }}>Apna Video Call</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <Button 
                        startIcon={<RestoreIcon />}
                        onClick={() => navigate("/history")}
                        sx={{
                            color: '#667eea',
                            fontWeight: 600,
                            textTransform: 'none',
                            fontSize: '1rem',
                            '&:hover': {
                                background: 'rgba(102, 126, 234, 0.1)',
                            }
                        }}
                    >
                        History
                    </Button>

                    <Button 
                        startIcon={<LogoutIcon />}
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/auth")
                        }}
                        variant="outlined"
                        sx={{
                            borderColor: '#667eea',
                            color: '#667eea',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: '20px',
                            px: 3,
                            '&:hover': {
                                borderColor: '#764ba2',
                                background: 'rgba(102, 126, 234, 0.1)',
                            }
                        }}
                    >
                        Logout
                    </Button>
                </div>


            </div>


            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '30px',
                            lineHeight: '1.2',
                        }}>Connect, Collaborate, Celebrate - Video Calls Made Simple 🎉</h2>

                        <div style={{ display: 'flex', gap: "15px", alignItems: 'stretch' }}>

                            <TextField 
                                onChange={e => setMeetingCode(e.target.value)} 
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleJoinVideoCall();
                                    }
                                }}
                                id="outlined-basic" 
                                label="Meeting Code" 
                                variant="outlined"
                                sx={{
                                    flex: 1,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: 'white',
                                        '&:hover fieldset': {
                                            borderColor: '#667eea',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#667eea',
                                            borderWidth: '2px',
                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#667eea',
                                    },
                                }}
                            />
                            <Button 
                                onClick={handleJoinVideoCall} 
                                variant='contained'
                                size="large"
                                sx={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    borderRadius: '12px',
                                    px: 4,
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                    textTransform: 'none',
                                    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.6)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                JOIN
                            </Button>

                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="Video Call Illustration" />
                </div>
            </div>
        </>
    )
}


export default withAuth(HomeComponent)