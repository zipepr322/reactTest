import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectOptions:['first option'],
      selectValue:'',
      value:''
    };
  }

  handleChange(event){
    this.setState({...this.state, value: event.target.value})
  }

  handleSelectChange(event){
    this.setState({...this.state, selectValue: event.target.value})
  }

  addValue(){
    this.state.selectOptions.push(this.state.value);
    this.setState({...this.state, selectOptions: this.state.selectOptions, value:''})
  }

  render() {
    const options = this.state.selectOptions.map((value, index)=>{
      return <option key={index}> {value} </option>
    });

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        />
        <button onClick={()=>this.addValue()}>Add select</button>
        <select
          onChange={this.handleSelectChange.bind(this)}
          value={this.state.selectValue}
        >
          {options}
        </select>
      </div>
    );
  }
}

export default App;
