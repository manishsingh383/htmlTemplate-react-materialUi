import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const purpleCOlor = purple[800]

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 350,
        padding:'30px'
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    marginBottom: {
        marginBottom: '30px'
    },
    signInButton: {
        width: '100%',
        // marginTop:'15px',
        backgroundColor:purpleCOlor,
        color:'#fff',
        textTransform:'none'
    },
    accountIcon: {
    //    marginTop:'30px'
    },
    accountLoginText:{
        fontWeight:'bold',
        fontSize:'25px'
    },
    divider:{
        marginTop:'30px',
    },
    signUpText:{
        float:'right'
    }

}));

export default function Tab1() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        textField: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <center>
                <AccountCircleIcon container justifyContent="center" className = { classes.accountIcon} style={{ color: purpleCOlor, fontSize: 60 }}/>
                </center>
                <Grid container justifyContent="center" className={clsx(classes.accountLoginText, classes.marginBottom)}>Account Login</Grid>
               
               
                <Grid container >
                    <FormControl fullWidth className={clsx(classes.margin, classes.marginBottom)}>
                        <InputLabel htmlFor="standard-adornment-password">Username</InputLabel>
                        <Input
                            type={'text'}
                            value={values.textField}
                        // onChange={handleChange('username')}
                        endAdornment={
                            <InputAdornment position="end">
                             <PersonIcon style={{ color: purpleCOlor, fontSize: 30 }}/>
                            </InputAdornment>
                        }
                        />

                    </FormControl>
                    <FormControl fullWidth className={clsx(classes.margin)}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input

                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        style={{ color: purpleCOlor, fontSize: 30 , padding:5}}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Grid container justifyContent="flex-end">
                    <Link
                        className={clsx(classes.margin, classes.marginBottom)}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        >
                        Forgot Password?
                        </Link>
                    </Grid>

                    <Button variant="contained"  className={clsx(classes.signInButton)}>
                        Login
                    </Button>
                    
                    <Divider className={clsx(classes.signInButton, classes.divider)}/>
             
                    <Grid container justifyContent="center">
                    <Link
                        className={clsx(classes.margin, classes.signUpText)}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        >
                       Want to try?
                    </Link>
                    </Grid>
             

                </Grid>

            </Paper>
        </div>
    );
}
