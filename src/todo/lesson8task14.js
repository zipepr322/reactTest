import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cityList: [''],
      cityChoice: 0,
      inputVal:'',
      defaultSelectVal:'',
      taskText: `14
      Дан селект. Изначально он пустой. 
      Дан инпут и кнопка. В этот инпут вводится название города. 
      По нажатию на кнопку этот город должен попасть в селект. 
      Пользователь нашего скрипта добавляет несколько городов в селект, 
      затем выбирает один из добавленных городов - и этот город должен отобразиться на экране в каком-нибудь абзаце.
      `,
    };
  }
  addCityOption(){
    if (this.state.inputVal !== ''){
      this.state.cityList.push(this.state.inputVal);
      this.setState({
        ...this.state,
        cityList: this.state.cityList,
        inputVal:''
      });
    }
  }

  selectChange(e){
    this.setState({...this.state, cityChoice: Number(e.target.value)})
  }

  handleInputChange(e){
    this.setState({...this.state, inputVal: e.target.value})
  }


  render() {
    const selectOptions= this.state.cityList.map((value, index)=>{
      if (value === '') return <option value={index} disabled='enabled' key={index}>{value}</option>;
      else return <option value={index} key={index}>{value}</option>
    });
    return (
      <div>
        <p>{this.state.taskText}</p>
        <select
          value={this.state.cityChoice}
          onChange={(e)=>{this.selectChange(e)}}
        >
          {selectOptions}
        </select>
        <input
          type="text"
          placeholder='enter city/town to add'
          value={this.state.inputVal}
          onChange={(e)=>{this.handleInputChange(e)}}
        />
        <button onClick={()=>{this.addCityOption()}}>add</button>
        <h2>You have chosen:&nbsp;{this.state.cityList[this.state.cityChoice]}</h2>
      </div>

    );
  }
}

export default App;