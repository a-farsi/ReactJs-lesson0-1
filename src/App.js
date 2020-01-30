import React, { Component } from "react";
import "./App.css";
import Person from "./Person";
import InputTextField from "./InputTextField";

class App extends Component {
  state = {
    persons: [
      { name: "Piotr", occupatoin: "teacher", age: 30 },
      { name: "tomasz", occupatoin: "researcher", age: 45 },
      { name: "Marta", occupatoin: "secretary", age: 42 }
    ]
  };
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: "Uotatozisc", occupatoin: "Professor", age: 30 },
        { name: newName, occupatoin: "researcher", age: 45 },
        { name: "Marta", occupatoin: "secretary", age: 42 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Uotatozisc", occupatoin: "Professor", age: 30 },
        { name: "Wanadoo", occupatoin: "researcher", age: 45 },
        { name: event.target.value, occupatoin: "secretary", age: 42 }
      ]
    });
  };

  render() {
    const style = {
      backgroundcolor: "white",
      font: "inherent",
      border: "1px solid bleu",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>This lesson is for state</h1>
        <p>
          The first person name is {this.state.persons[0].name} and my
          occupatoin is {this.state.persons[0].occupatoin}
        </p>
        {/*arrow function to pass paramter to a function*/}
        <button style={style} onClick={() => this.switchNameHandler("Perirra")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          occupation={this.state.persons[0].occupatoin}
        ></Person>
        <p>
          The seconde person name is {this.state.persons[1].name} and my
          occupatoin is {this.state.persons[1].occupatoin}
        </p>
        {/*Binding to pass paramter to a function*/}
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Maximilian")}
        >
          Switch Name
        </button>
        {/*Passing method's reference to the children component as props*/}
        <Person
          name={this.state.persons[1].name}
          occupation={this.state.persons[1].occupatoin}
          click={() => {
            this.switchNameHandler("Switzerland");
          }}
        ></Person>
        <p>
          The third person name is {this.state.persons[2].name} and my
          occupatoin is {this.state.persons[2].occupatoin}
        </p>
        <button
          style={style}
          onClick={() => console.log("button 3rd person clicked")}
        >
          Switch Name
        </button>
        {/*Pass a method's reference to a children component*/}
        <Person
          name={this.state.persons[2].name}
          occupation={this.state.persons[2].occupatoin}
        ></Person>
        <InputTextField
          changed={this.nameChangeHandler}
          name={this.state.persons[2].name}
        ></InputTextField>
      </div>
    );
  }
}

export default App;
