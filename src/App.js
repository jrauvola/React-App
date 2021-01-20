import React, { Component } from 'react'
import Table from './Table'
import axios from 'axios';
import Form from './Form';

class App extends Component {
  state = {
    characters: [],
  }
  removeCharacter = index => {
  const { characters } = this.state
    
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
    return axios.delete('http://localhost:5000/users', characters)
    .then(function (response) {
      console.log(response);
      return (response.status === 200);
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
 }

render() {
  <Form handleSubmit={this.handleSubmit} />
  const { characters } = this.state

  return (
    <div className="container">
       <Table characterData={characters} removeCharacter={this.removeCharacter} />
       <Form handleSubmit={this.handleSubmit}/>
    </div>
  )
}

handleSubmit = character => {
  this.setState({ characters: [...this.state.characters, character] })
}

}
export default App
