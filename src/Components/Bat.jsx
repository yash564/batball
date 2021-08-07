import React, { useState } from 'react';
import { connect } from 'react-redux';

const Bat = (props) => {
    const [value,setValue] = useState("");

    return ( <div>
        <h1>Total Bats: {props.bat}</h1>
        <input value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
        <button onClick={()=>{props.setBat(value); setValue("")}}>Buy Bat</button>
    </div> );
}

function mapStateToProps(state){
    return state.Bat;
}

function mapDispatchToProps(dispatch){
    return {
        setBat:(value)=>{
            dispatch({
                type:"set_bat",
                payload:value,
            })
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Bat);