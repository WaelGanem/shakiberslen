import React, { Component } from 'react';
class AddComponent extends Component {
    state = {
        name: '',
        email: '',
    }

    callParentToAdd = () => {
        this.props.createCat(this.state)
        this.setState({
            name: '',
            email: ''
        })
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='Name' 
                onChange={(e)=>{
                    this.setState({
                        name: e.target.value
                    })
                }}></input>

                <input style= {{margin:"5px"}} type='text' placeholder='Email'
                onChange={(e)=>{
                    this.setState({
                        email: e.target.value
                    })
                }}
                ></input>

                <button 
                onClick={()=>{this.callParentToAdd()}} 
                style={{backgroundColor: "green", color:"white", marginLeft:"2px"}}>+</button>
            </div>
        );
    }
}

export default AddComponent;