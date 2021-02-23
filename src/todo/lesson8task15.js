import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currencyValue:[
        {name:'UAH', rate: 1},
        {name:'RUB', rate: 0.37},
        {name:'USD', rate: 28},
        {name:'EUR', rate: 33.9},
      ],
      inputVal:'',
      firstOptionChoice: 0,
      secondOptionChoice: 0,
      exchangeVal:'',
      taskText: `15
        Реализуйте калькулятор валют. 
        Как он работает: дан инпут, в который вводится сумма и даны два селекта - в первом выбирается из какой валюты,
        а во втором - в какую. Дана также кнопка. 
        По нажатию на эту кнопку в абзац должна вывестись сумма в выбранной валюте.
      `,
    };
  }
  handleFirstOptionChange(e){
    this.setState({...this.state, firstOptionChoice: Number(e.target.value)});
  }
  handleSecondOptionChange(e){
    this.setState({...this.state, secondOptionChoice: Number(e.target.value)});
  }
  handleInputChange(e){
    this.setState({...this.state, inputVal: Number(e.target.value)});
  }
  handleExchange(){
    if(this.state.inputVal !== ''){
      this.setState({
        ...this.state,
        exchangeVal: Number(this.state.inputVal) * this.state.currencyValue[this.state.firstOptionChoice].rate / this.state.currencyValue[this.state.secondOptionChoice].rate,
      })
    }

  }
  render() {
    const firstOption=this.state.currencyValue.map((value, index)=>{
      return <option value={index} key={index}
      >{value.name}
      </option>
    });
    const secondOption=this.state.currencyValue.map((value, index)=>{
      return <option value={index} key={index}
      >{value.name}
      </option>
    });
    return (
      <div>
        <select
          value={this.state.firstOptionChoice}
          onChange={(e)=>{this.handleFirstOptionChange(e)}}
        >
          {firstOption}
        </select>
        <input type="number" placeholder="enter sum to convert" onChange={(e)=>{this.handleInputChange(e)}}/>
        <select
          value={this.state.secondOptionChoice}
          onChange={(e)=>{this.handleSecondOptionChange(e)}}
        >
          {secondOption}
        </select>
        <button onClick={()=>{this.handleExchange()}}>exchange</button>
        {this.state.inputVal && <h2>Вы платите:&nbsp;{this.state.inputVal}&nbsp;{this.state.currencyValue[this.state.firstOptionChoice].name}</h2>}
        {this.state.exchangeVal && <h2>Вы получаете:&nbsp;{this.state.exchangeVal.toFixed(2)}&nbsp;{this.state.currencyValue[this.state.secondOptionChoice].name}</h2>}
      </div>
    );
  }
}

export default App;