import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      option: 'option1'
    };
  }

  handleChange(event){
    this.setState({option: event.target.value})
  }

  render() {
    return (
      <div>
        <h3>{this.state.option}</h3>
        <input
          type="radio"
          value="option1"
          checked={this.state.option === 'option1'}
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="radio"
          value="option2"
          checked={this.state.option === 'option2'}
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="radio"
          value="option3"
          checked={this.state.option === 'option3'}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
