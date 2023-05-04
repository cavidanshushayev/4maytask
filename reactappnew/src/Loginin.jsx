import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';







const Loginin = ({ user, setIsLoggedIn, users, setUser }) => {


    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(e.target.value);

    }

    function handleSubmit(e) {
        e.preventDefault();
        // find user
        let userFound = user.find((item) => (item.username === user.username && item.password === user.password))
        if (userFound === undefined)
            userFound = false;
        else
            userFound = true;

        setIsLoggedIn(userFound);

    }
    return (
        <>



        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input name="username" onChange={(e) => handleChange(e)} type='text' placeholder='username'></input>
                        <input name="password" onChange={(e) => handleChange(e)} type='password' placeholder='password'></input>
                        <button type='sumbit'> Login</button>

                    </form>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
               
            </Box>

        </Container>




    </>
    )
}









// function Loginin() {
//     return (
//         <>



//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign in
//                     </Typography>
//                     <Box component="form" noValidate sx={{ mt: 1 }}>
//                         <form onSubmit={(e) => handleSubmit(e)}>
//                             <input name="username" onChange={(e) => handleChange(e)} type='text' placeholder='username'></input>
//                             <input name="password" onChange={(e) => handleChange(e)} type='password' placeholder='password'></input>
//                             <button type='sumbit'> Login</button>

//                         </form>
//                         <Grid container>
//                             <Grid item xs>
//                                 <Link href="#" variant="body2">
//                                     Forgot password?
//                                 </Link>
//                             </Grid>
//                             <Grid item>
//                                 <Link href="#" variant="body2">
//                                     {"Don't have an account? Sign Up"}
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Box>

//             </Container>




//         </>
//     );
// }

export default Loginin;
