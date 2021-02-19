import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = { value: ''};
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <textarea value={this.state.value} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default App;
