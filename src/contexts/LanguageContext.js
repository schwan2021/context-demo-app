import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { language: "french" };
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    changeLanguage(e) {
        this.setState({ language: e.target.value });
    }
    render() {
        return(
            <LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

//Creating a higher order component, which takes a different component as an argument and some props
// and returns that same compoonent with all the original props. Also injects a prop called the languageContext
export const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props}/>}
    </LanguageContext.Consumer>
)