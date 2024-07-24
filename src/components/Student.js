import React, { Component } from 'react';

class Student extends Component {
    
    render() {
        const myStyle = {backgroundColor: "Red", color:"white", marginLeft:"2px"};
        return (
            <div>
                <input type='text' value={this.props.data.name}></input>
                <input style= {{margin:"5px"}} type='text' value={this.props.data.email}></input>
                <button onClick={()=>{
                    this.props.removeCat(this.props.data)
                }}
                style={myStyle}>X</button>
                <br />
            </div>
        );
    }
}

export default Student;