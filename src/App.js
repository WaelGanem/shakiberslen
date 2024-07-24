import AddComponent from './components/AddComponent';
import Students from './components/Students';
import React from 'react';



class App extends React.Component {
  
  state = {
    allCats:[]

    // allCats: [
    //   { id: 13, name: "Loki", age: 4, email: "loki@meowmail.com" },
    //   { id: 14, name: "Jaafar", age: 5, email: "jaafar@meowmail.com" }, // Add emails
    //   { id: 15, name: "Jimmy", age: 3, email: "jimmy@meowmail.com" },
    //   { id: 16, name: "Milo", age: 2, email: "milo@meowmail.com" },
    //   { id: 17, name: "Benji", age: 1, email: "benji@meowmail.com" },
    //   { id: 18, name: "Ibrahim", age: 6, email: "ibrahim@meowmail.com" },
    // ],
  };

  addCat =(s)=>{
    this.setState({
      allCats: [...this.state.allCats, s]
    })
  }

  removeCat =(c) => {
    var answer = window.confirm("Are you sure you want to delete "+c.name+" ??")
    if (answer) {
      this.setState({
        allCats: this.state.allCats.filter((x)=> x.id !==c.id)
      })
    }
  }

  render(){
    return (
      <div className="App">
        <AddComponent createCat={this.addCat} />
        <Students data= {this.state.allCats} rmCat={this.removeCat} />
      </div>
    );
  }

  componentDidMount(){
    //alert("componentDidMount")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      this.setState({
        allCats:[...json]
      })
    })
  }

  // constructor(){
  //   super();
  //   alert("Ana el constructor!!!!!!!")


  //   setInterval(()=>{
  //     this.setState({
  //       names: [...this.state.names, "Rony"]
  //     })
  //   }, 2000);

  // }
}

export default App;
