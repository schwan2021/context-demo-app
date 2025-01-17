import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";
const words = {
  english: {
    signIn: 'Sign In',
    email: "Email",
    name: 'Name',
    insertYourName: 'Insert your name',
    password: 'Password',
    insertYourPassword: 'Insert your password',
    rememberMe: 'Remember me',
    language: 'Language'
  },
  french: {
    signIn: 'Se Connecter',
    email: "Adresse Electonique",
    name: 'Nom',
    insertYourName: 'Insérez votre nom',
    password: 'Mot de passe',
    insertYourPassword: 'Insérez votre mot de passe',
    rememberMe: 'Souvienez-vous de moi',
    language: 'Langue'
  },
  spanish: {
    signIn: 'Iniciar Sesión',
    email: "Correo Electronico",
    name: 'Nombre',
    insertYourName: 'Introduzca su nombre',
    password: 'Contraseña',
    insertYourPassword: 'Introduzca su contraseña',
    rememberMe: 'Recordarme',
    language: 'Idioma'
  }
}

class Form extends Component {
  static contextType = LanguageContext;

  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { email, signIn, password, rememberMe } = words[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='french'>French</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>{email}</InputLabel>
              <Input id='email' name='email' autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>{password}</InputLabel>
              <Input id='password' name='password' autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color='primary' />}
              label={rememberMe}
            />
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(Form);
