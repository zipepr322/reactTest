import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      routes: [
        {name: 'Australia', value: 'option1'},
        {name: 'UAE', value: 'option2'},
        {name: 'Iceland', value: 'option3'},
      ],
      currentRadioValue: '',
      radioChoice:''
    };
  }

  handleChoice(event, index){
    this.setState({...this.state, currentRadioValue: event.target.value, radioChoice: this.state.routes[index].name})
  }

  render() {
    const routeList= this.state.routes.map((value,index)=>{
      return <p key={index}>
        {value.name}
        <input
          type="radio"
          value={value.value}
          checked={this.state.routes[index].value === this.state.currentRadioValue}
          onChange={(event)=>{this.handleChoice(event,index)}}
        />
      </p>
    });

    return (
      <div>
        {routeList}
        <p>You choosed:{this.state.radioChoice}</p>
      </div>
    );
  }
}

export default App;


