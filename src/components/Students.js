import React, { Component } from 'react';
import Student from './Student';
class Students extends Component {

    sketchCats = () => {
        return this.props.data.map((n) => ( 
          <Student 
          data={n} 
          removeCat={this.props.rmCat}></Student>
        ));
      };

    render() {
        return (
            <div>
                {this.sketchCats()}
            </div>
        );
    }

    
    test = () => {

        // this.names.forEach(element => {
        //     console.log(element)
        // });

        // var mappedData = this.names.map((e)=>{return e + "x" })
        // console.log(mappedData)

        // const newData = [...this.names, "Smudge"]
        // console.log(newData)

        // const cat = {id: "31", name: "Thurston"};
        // const newCat = {...cat, age: "10"};
    }

    constructor() {
        super();
        this.test();
    }

}

export default Students;