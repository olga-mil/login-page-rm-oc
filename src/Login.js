import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, ThemeProvider, } from '@material-ui/core/styles';
import ImageLoginPage from './img/login-image.jpg'
import Logo from './img/login-logo.png'

const personName = `Иван Иванов`
const quote = `Успешные люди вырываются вперёд, используя то время, которое остальные используют впустую`
const autorQuote = `Генри Форд`

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${ImageLoginPage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff'
  },
  paper: {
    margin: theme.spacing(5, 7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#262626',
    },
  },
});

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar src={Logo}/>
            </Grid>
            <Grid item>
              <Typography component="h2" variant="body1" style={{cursor:'default', color:"#262626"}}>Сбербанк</Typography>
            </Grid>
          </Grid>
          <Box mt={3}>
            <p style={{ fontSize:29, align: "left", cursor:"default", color:"#262626", fontWeight:500}}>Добро пожаловать,<br />{personName}</p>
            <p style={{ fontSize:16, cursor:"default", color:"#262626" }}>Для входа введите логин и пароль</p>
          </Box>
          <form className={classes.form} noValidate>
            <ThemeProvider theme={theme}>
              <TextField
                variant="outlined"
                margin="normal"
                //required
                fullWidth
                id="login"
                label="Логин"
                placeholder="Например, ivanov1234"
                name="login"
                autoComplete="login"
                //autoFocus
              />
                <Grid
                 container
                      justify="flex-end">
                    <Link href="#" variant="body2" style={{color:'#1a9f29', marginTop:15}}>
                      Забыли пароль?
                    </Link>
                </Grid>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </ThemeProvider>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disableElevation
              style={{backgroundColor:'#08a652', color:'#fff', height:55, marginTop:40}}
            >
              Войти
            </Button>
          </form>
        </div>
      </Grid>
      <Grid
        container xs={false} sm={4} md={8}
        className={classes.image}
        justify="center"
        alignItems="center"
        >
          <div style={{ maxWidth:390}}>
            <p style={{ fontSize:29, fontWeight:500 }}>Цитата дня</p>
            <p style={{ fontSize:16, marginTop: -20 }}>{quote}</p>
            <p style={{ fontSize:16, textAlign:'right' }}>{autorQuote}</p>
          </div>
      </Grid>
    </Grid>
  );
}
