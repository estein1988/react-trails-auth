import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const usersURL = 'http://localhost:8000/users/'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Django Trails Auth
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default class SignUp extends Component {
    
    state = {
        username: '',
        password: '',
        email: '',
        full_name: '',
        age: '',
        experience: '',
        errorMessage: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(usersURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    username: this.state.username,
                    password: this.state.password,
                    email: this.state.email,
                    full_name: this.state.full_name,
                    age: this.state.age,
                    experience: this.state.experience
                }
            )
        })
        .then(response => response.status === 400
            ? this.setState({errorMessage: "User already exists, bad password or email blank"})
            : this.setState({errorMessage: 'User successfully created'})
        )
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={useStyles.paper}>
                <Avatar className={useStyles.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <form onSubmit={this.handleSubmit} className={useStyles.form} noValidate>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="username"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        autoFocus
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type="password"
                        id="password"
                        label="password"
                        name="password"
                        autoComplete="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="full_name"
                        label="Full Name"
                        type="full_name"
                        id="full_name"
                        autoComplete="full_name"
                        value={this.state.full_name}
                        onChange={this.handleChange}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type="age"
                        id="age"
                        label="Age"
                        name="age"
                        autoComplete="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type="experience"
                        id="experience"
                        label="Experience"
                        name="experience"
                        autoComplete="experience"
                        value={this.state.experience}
                        onChange={this.handleChange}
                    />
                    </Grid>

                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={useStyles.submit}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">

                </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
                <h3>{this.state.errorMessage}</h3>
            </Container>
        );
    }
}