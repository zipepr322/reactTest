import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      texts: [],
      areaValue: ''
    };
  }

  handleChange(event){
    this.setState({...this.state, areaValue: event.target.value})
  }

  addText(){
    this.state.texts.push(this.state.areaValue);
    this.setState({texts:this.state.texts, areaValue:''});
  }

  render() {
    const textAreaList = this.state.texts.map((value, index)=>{
      return <p key={index}> {value} </p>
    });

    return (
      <div>
        <textarea value={this.state.areaValue} onChange={this.handleChange.bind(this)}/>
        {textAreaList}
        <button onClick={()=>this.addText()}>Add Text</button>
      </div>
    );
  }
}

export default App;
