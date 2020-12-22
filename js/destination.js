import React from 'react';


function Destination (props){
    return (
        <aside className="col-2">
            <h2 className="left">{props.from}</h2>
            <h2 className="right">{props.to}</h2>
        </aside>
    )
}
export default Destination;