import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/* import Stad from './stad.js';
import List from './list.js'; */
import App from './app.js';


/* 
class App extends Component{
    constructor(props){
        super(props);
    } 
    render(){
        return (
            <div className="container">
                <div className="container-top">
                    <h1>ÅKA TÅG</h1>
                </div>
                <div className="container-middle">
                    <Stad side="left" name="STOCKHOLM" time="10:30" />
                    <Stad side="right" name="GÖTEBORG" time="14:45"/>
                </div>
                <div className="container-bottom">
                   <div className="radio-div"> 
                        <div>
                            <input type="radio" value="2:a Klass" name="vote" id="vote-2a" checked>
                            </input>
                            <label for="vote-2a">2:a Klass</label>
                        </div>
                        <div>
                            <input type="radio" value="1:a Klass" name="vote" id="vote-1a" >
                            </input>
                            <label for="vote-1a">1:a Klass</label>
                        </div>
                   </div> 
                    <div className='some-list'>
                        <List tickets="Antal biljetter" ticketsValue="1" />
                        <List addressing="Titel" addressingValue="Ms."/>
                    </div>
                </div>
            </div> 
        )
    }
}

 */
ReactDOM.render(<App />, document.getElementById('root'));
