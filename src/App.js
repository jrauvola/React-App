import React, { Component } from 'react'
import Table from './Table'
import axios from 'axios';
import Form from './Form';

class App extends Component {
  state = {
    characters: [],
  }

  makeDeleteCall(character, index){
    return axios.delete('http://localhost:5000/users', { data: character })
      .then(function (response) {
      console.log(response);
      return (response.status === 200);
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
  }

  removeCharacter = index => {
    const { characters } = this.state
    
    this.setState({
      characters: characters.filter((character, i) => {
        if(i === index){
          this.makeDeleteCall(character, index).then( callResult => {
            if (callResult){
              return false;
            }
          })
        }
        else{
          return true;
        }
      }),
    })
  }

  handleSubmit = character => {
    this.makePostCall(character).then( callResult => {
      if (callResult){
        if (callResult.status === 201){
          this.setState({ characters: [...this.state.characters, callResult.data.user] });
        }
      }
    });
  }

  makePostCall(character){
    return axios.post('http://localhost:5000/users', character)
    .then(function (response) {
      console.log(response);
      return (response.status === 200);
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users')
    .then(res => {
      const characters = res.data.users_list;
      this.setState({ characters });
    })
    .catch(function (error) {
      //Not handling the error. Just logging into the console.
      console.log(error);
    });
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }

}
export default App
