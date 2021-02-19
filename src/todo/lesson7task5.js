import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [
        'Kiev',
        'Kharkov',
        'Odessa',
        'Lvov'
      ],
      defaultValue: 0
    };
  }

  handleChange(event){
    this.setState({defaultValue: event.target.value})
  }

  render() {
    const options = this.state.cities.map((item, index) => {
      return <option key={index} value={index}>{item}</option>;
    });

    return (
      <div>
        {<h3>Вы выбрали:{this.state.cities[this.state.defaultValue]}</h3>}
        <select value={this.state.defaultValue} onChange={this.handleChange.bind(this)}>
          {options}
        </select>
      </div>
    );
  }
}

export default App;
