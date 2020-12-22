import React, { Component } from 'react';

class List extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
               
                <div className="my-tickets">
                    {/* <label >{this.props.tickets}</label> */}
                    <input type="text" placeholder={this.props.ticketsValue} />
                               
                </div>


                <div className="my-addressing">
                   {/*  <label >{this.props.addressing}</label> */}
                    <input type="text" placeholder={this.props.addressingValue} />
                               
                </div>
                
            </div>
        )
    }
}

export default List;