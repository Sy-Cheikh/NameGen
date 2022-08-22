import React from "react";
import './App.css';
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{

     state = {
        headerText: "NameGen !",
        headerExpended: true,
        suggestedNames: [],
     };


     handleInputChange = (inputText) =>{

        this.setState({
            headerExpended: !inputText.length,
            suggestedNames: inputText ? name(inputText) : [],
        });
     };
    
    render(){
        return (
            <div>
                <Header 
                        headerExpended ={this.state.headerExpended} 
                        headTitle ={this.state.headerText}/>
                <SearchBox onInputChange = {this.handleInputChange}/>
                <ResultsContainer  suggestedNames={this.state.suggestedNames}/>
               
            </div>
        )
    }
}
 
export default App;