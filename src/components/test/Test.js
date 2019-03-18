import React, { Component } from "react";

class Test extends Component {
    state = {
        id: '',
        userId: '',
        title: '',
        completed: ''
    };

  // lifecycle methods donde se realizan las consultas al backend (fetching data from a server)
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => this.setState({
            id: data.id,
            userId: data.userId,
            title: data.title,
            completed: String(data.completed)
        }));
    }

  /* // Metodo que se lanza antes de componentDidMount-- put all your AJAX calls
  componentWillMount() {
    console.log("componentWillMount..");
  }
  //this is only going to run when the component updates
  //What I mean by update is like changing state or something like that.
  componentDidUpdate() {
    console.log("componentDidUpdate..");
  }
  //This will run and this is usually used with redux when you have a State in redux like application
  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps..");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: "something"
    }; */


  render() {
    const {id, userId,title, completed} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{id}</p>
        <p>{userId}</p>
        <p>{completed}</p>
        </div>
    );
  }
}
export default Test;
