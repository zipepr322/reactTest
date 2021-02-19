import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {value: "Kiev"};
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        {<h3>Вы выбрали:{this.state.value}</h3>}
        <select value={this.state.value} onChange={this.handleChange.bind(this)}>
          <option>Kiev</option>
          <option>Kharkov</option>
          <option>Odessa</option>
          <option>Lvov</option>
        </select>
      </div>
    );
  }
}

export default App;
