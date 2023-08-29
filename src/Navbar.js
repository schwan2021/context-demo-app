import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";
import ReactCountryFlag from "react-country-flag"

const content = {
  english: {
    search: "Search",
    flag: "GB"
  },
  french: {
    search: "Chercher",
    flag: "FR"
  },
  spanish: {
    search: "Buscar",
    flag: "ES"
  }
};
class Navbar extends Component {
  static contextType = ThemeContext; //tells the class to look up and see if you are nested inside of a theme context provider
  //if you are inside of more than one, find the nearest one
  
  render() {
    const { isDarkMode, toggleTheme } = this.context
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];
    return (
      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode? 'default': 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span><ReactCountryFlag countryCode={flag} svg /></span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            <Switch onChange={toggleTheme}/>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
//wrap Navbar once with withStyles then again with withLanguageContext
export default withLanguageContext(withStyles(styles)(Navbar));
