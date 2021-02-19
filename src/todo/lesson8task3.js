import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:[
        {arrValue: 'firstValue', checked: true},
        {arrValue: 'secondValue', checked: true},
        {arrValue: 'thirdValue', checked: true},
      ],
    };
  }

  handleChange(index){
    const changedState=this.state.data.map((newArr, i)=>{
      if(i === index){
        return {...newArr, checked: !newArr.checked}
      }
      else return {...newArr}
    });

    this.setState({data: changedState});
  }

  render() {
    const arrValues= this.state.data.map((value,index)=>{
      return <div key={index}>
        <input
          type="checkbox"
          checked={this.state.data[index].checked}
          onChange={()=>this.handleChange(index)}
        />
        {value.checked && <p>{value.arrValue}</p>}
      </div>
    });

    return (
      <div>
        {arrValues}
      </div>
    );
  }
}

export default App;


