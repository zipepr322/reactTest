import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checkboxValue:false,
      inputValue:''
    };
  }

  handleInputChange(event){
    this.setState({...this.state, inputValue: event.target.value})
  }

  handleCheckboxChange(event){
    this.setState({...this.state, checkboxValue: !this.state.checkboxValue});
  }

  render() {
    return (
      <div>
        <input
          disabled={"enabled" && !this.state.checkboxValue}
          type="text"
          onChange={this.handleInputChange.bind(this)}
          value={this.state.value}
        />
        <input type="checkbox"
               onChange={this.handleCheckboxChange.bind(this)}
               value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
