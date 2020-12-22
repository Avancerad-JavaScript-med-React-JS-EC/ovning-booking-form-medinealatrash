import React, { Component } from 'react';

import Destination from './destination.js'
import Form from './form.js'


class App extends Component{
    render(){
        return(
            <section className="booking">
                <h1>ÅKA TÅG</h1>
                <Destination from="Stockholm" to="Göteborg" />
                <Form />
                
            </section>
        )
    }
}
export default App;