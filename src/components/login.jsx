import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    loginForm:{
        marginTop:"22vh",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    topText:{
        color:"black"
    },
    avatar1: {
      margin: theme.spacing(1),
      backgroundColor: "#21943b",
      display: "inline-flex",
    },
    
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '30ch',
      },
  }));

export default function Login() {
    const history = useHistory();
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
      });
    const [showPassword, setShowPassword] = React.useState(false);
    const [isEmailErr, setEmailErr] = React.useState(false);
    const [isPassErr, setPassErr] = React.useState(false);

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const signInHandler = () => {
        userLoginRequest();
    }
    async function userLoginRequest() {
        var postmanURL = "https://www.postman.com/collections/5dfbcd9789e5ec3722df";
        try {
          const res = await axios.get(postmanURL, 
            {mode: 'no-cors'});
         
         let jj = JSON.stringify(res.data.item[0].request.body.raw);
         if(jj.split("\\")[4].slice(1,19)===values.email){
                if(jj.split("\\")[9].slice(1,11) === values.password){
                    alert("login success");
                    setEmailErr(false);
                    setPassErr(false);
                    await axios.post("https://reqres.in/api/login",values)
                    .then(res => {
                        localStorage.setItem("token", res.data.token);
                        history.push('/home');
                    })
                    .catch(err => {
                        alert("error", err);
                    });
                }
                else
                    {
                        setPassErr(true);
                        setEmailErr(false);
                    }
            }
        else{
            setEmailErr(true);
        }
         
        } catch (error) {
        alert('some error occured');
        }
      }
    return (
        <React.Fragment>
                <Fade in={true}>
                <div className={classes.loginForm}>
                    <Container
                    id="userForm"
                    component="main"
                    maxWidth="xs"
                    className="col-sm-12">
                        <div className={classes.paper}>
                <Avatar className={classes.avatar1}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" className={classes.topText}>
                  ------ Sign in using email ------
                </Typography>
                <form 
                className={classes.form} 
                noValidate>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="userEmail"
                    label="Email address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={isEmailErr}
                    onChange={handleChange('email')}
                  />
                  </FormControl>
                  <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Enter password"
                    type={showPassword ? 'text' : 'password'}
                    id="outlined-adornment-password"
                    autoComplete="userPassword"
                    onChange={handleChange('password')}
                    error={isPassErr}
                    endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                />
                  </FormControl>
                  <Button
                    disabled={(values.email==="" || values.password==="")}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={signInHandler}>
                    Sign In
                  </Button>
                </form>
              </div>
                    </Container>
                </div>
                </Fade>
        </React.Fragment>
    )
}
