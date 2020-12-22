import React, { Component } from 'react';

class Stad extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className={this.props.side}>
                <h3>{this.props.name} </h3>
                <p >{this.props.time} </p>
            </section>
        )
    }
}


export default Stad;