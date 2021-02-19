import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectValue:['отмечено', 'не отмечено'],
      value:'не отмечено'
    };
  }

  handleSelectChange(event){
    this.setState({...this.state, value: event.target.value})
  }

  handleCheckboxChange(){
    this.state.value === 'отмечено'
      ? this.setState({...this.state, value: 'не отмечено'})
      : this.setState({...this.state, value: 'отмечено'})
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
        <input
          onChange={this.handleCheckboxChange.bind(this)}
          checked={this.state.value === 'отмечено'}
          type="checkbox"
        />
      </div>
    );
  }
}

export default App;
