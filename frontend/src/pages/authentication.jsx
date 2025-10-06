import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#667eea',
        },
        secondary: {
            main: '#764ba2',
        },
    },
});

export default function Authentication() {

    

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                let result = await handleLogin(username, password)


            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }

    let handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAuth();
        }
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh', overflow: 'hidden' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            width: '200%',
                            height: '200%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '50px 50px',
                            animation: 'moveBackground 20s linear infinite',
                        },
                    }}
                >
                    <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white', padding: 4 }}>
                        <Box
                            component="img"
                            src="/logo3.png"
                            alt="Apna VideoCall Logo"
                            sx={{
                                width: '180px',
                                height: 'auto',
                                mb: 3,
                                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
                                animation: 'fadeIn 1s ease-in-out',
                            }}
                        />
                        <Typography variant="h2" sx={{ 
                            fontWeight: 800, 
                            mb: 2,
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            letterSpacing: '-1px'
                        }}>
                            Apna VideoCall
                        </Typography>
                        <Typography variant="h5" sx={{ 
                            opacity: 0.95,
                            fontWeight: 400,
                            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
                        }}>
                            Connect with anyone, anywhere 🌍
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
                    background: 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '420px',
                            px: 3,
                            py: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ 
                            width: 50,
                            height: 50,
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
                        }}>
                            <LockOutlinedIcon sx={{ fontSize: 28 }} />
                        </Avatar>


                        <Box sx={{ mt: 1.5, mb: 1.5 }}>
                            <Button 
                                variant={formState === 0 ? "contained" : "outlined"} 
                                onClick={() => { setFormState(0) }}
                                sx={{
                                    mr: 1,
                                    px: 3,
                                    py: 1.2,
                                    borderRadius: '25px',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    ...(formState === 0 ? {
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)',
                                            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
                                        }
                                    } : {
                                        borderColor: '#667eea',
                                        color: '#667eea',
                                        '&:hover': {
                                            borderColor: '#764ba2',
                                            background: 'rgba(102, 126, 234, 0.05)',
                                        }
                                    })
                                }}
                            >
                                Sign In
                            </Button>
                            <Button 
                                variant={formState === 1 ? "contained" : "outlined"} 
                                onClick={() => { setFormState(1) }}
                                sx={{
                                    px: 3,
                                    py: 1.2,
                                    borderRadius: '25px',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    ...(formState === 1 ? {
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)',
                                            boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
                                        }
                                    } : {
                                        borderColor: '#667eea',
                                        color: '#667eea',
                                        '&:hover': {
                                            borderColor: '#764ba2',
                                            background: 'rgba(102, 126, 234, 0.05)',
                                        }
                                    })
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>

                        <Typography variant="h6" sx={{ 
                            mb: 1.5, 
                            mt: 0.5,
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            {formState === 0 ? "Welcome Back! 👋" : "Create Account 🚀"}
                        </Typography>

                        <Box component="form" noValidate sx={{ mt: 0, width: '100%' }}>
                            {formState === 1 ? <TextField
                                margin="dense"
                                required
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                                onKeyPress={handleKeyPress}
                                size="small"
                                sx={{
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
                            /> : <></>}

                            <TextField
                                margin="dense"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoFocus={formState === 0}
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyPress={handleKeyPress}
                                size="small"
                                sx={{
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
                            <TextField
                                margin="dense"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyPress={handleKeyPress}
                                id="password"
                                size="small"
                                sx={{
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

                            {error && (
                                <Typography sx={{ 
                                    color: '#e74c3c', 
                                    mt: 1.5, 
                                    p: 1.5, 
                                    fontSize: '0.85rem', 
                                    borderRadius: '8px',
                                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                                    border: '1px solid rgba(231, 76, 60, 0.3)',
                                    fontWeight: 500
                                }}>
                                    ⚠️ {error}
                                </Typography>
                            )}

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ 
                                    mt: 1.5, 
                                    mb: 0.5,
                                    py: 1.3,
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.6)',
                                    }
                                }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "🔐 Login" : "🚀 Create Account"}
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                message={message}
                ContentProps={{
                    sx: {
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        borderRadius: '10px',
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                    }
                }}
            />

        </ThemeProvider>
    );
}