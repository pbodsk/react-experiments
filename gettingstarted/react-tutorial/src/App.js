import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends React.Component {
  state = {
    characters: [
/*      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspiring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }*/
    ]
  };

  removeCharacter = index => {
    const {characters} = this.state;

    this.setState({
        characters: characters.filter((char, i) => {
          return i !== index;
        })
    });
  }

  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    });
  }

  render() {

    return(
      <div className="container">
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
