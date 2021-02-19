import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectValue:[
        '1 абзац',
        '2 абзац',
        '3 абзац'
      ],
      value:'1 абзац'
    };
  }

  handleSelectChange(event){
    this.setState({...this.state, value: event.target.value})
  }


  render() {
    const selects = this.state.selectValue.map((value, index)=>{
      return <option key={index}> {value} </option>
    });
    return (
      <div>
        <select value={this.state.value} onChange={this.handleSelectChange.bind(this)} >
          {selects}
        </select>
        {this.state.value === '1 абзац' && <p>{this.state.value}</p>}
        {this.state.value === '2 абзац' && <p>{this.state.value}</p>}
        {this.state.value === '3 абзац' && <p>{this.state.value}</p>}
      </div>
    );
  }
}

export default App;
