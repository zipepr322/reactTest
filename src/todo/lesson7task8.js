import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colorOptions: [
        '#ffffff',
        '#5e4bc5',
        '#22c71f',
        '#b51111'
      ],
      colors: [
        'white',
        'blue',
        'green',
        'red'
      ],
      value: ''
    };
  }

  handleChange(event){
    this.setState({...this.state, value: event.target.value})
  }


  render() {
    const colorType = this.state.colors.map((value, index)=>{
      return <option key={index}> {value} </option>
    });
    const description=`Дан селект со списком CSS цветов. Дан абзац. Сделайте так, чтобы при смене цвета абзац красился в выбранный цвет.`;

    return (
      <div>
        <p style={{backgroundColor: this.state.value}} >{description}</p>
        <select
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        >
          {colorType}
        </select>
      </div>
    );
  }
}

export default App;
