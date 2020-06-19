import React, { Component } from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { searchText: "", placeholder:"Tapez le nom de votre film..."}
    }
    
    render(){
       return(
           <div>
                <input onChange={this.handleChange.bind(this)}
                placeholder={this.state.placeholder}/>

                <p> {this.state.searchText} </p>

            </div>
        )
    }

    handleChange(event){
        this.setState({searchText: event.target.value});

    }
}

export default SearchBar;