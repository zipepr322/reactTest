import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      engWeekDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      ruWeekDays: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
      enIsActive: true,
      taskText: `10
        Даны два селекта. 
        С помощью первого селекта можно выбрать язык пользователя (русский или английский). 
        Если в первом селекте выбран русский язык, то во втором селекте должен появится список дней недели по-русски. 
        А если в первом селекте выбран английский - то и во втором дни недели будут по-английски.
      `,
    };
  }
  handleLangChange(){
    this.setState({...this.state, enIsActive: !this.state.enIsActive})
  }

  render() {
    const engDaysSelect= this.state.engWeekDays.map((value,index)=>{
      return <option>
        {value}
      </option>
    });
    const ruDaysSelect= this.state.ruWeekDays.map((value,index)=>{
      return <option>
        {value}
      </option>
    });
    return (
      <div>
        {this.state.taskText}
        <select value={this.state.enIsActive} onChange={()=>{this.handleLangChange()}}>
          <option>en</option>
          <option>ru</option>
        </select>
        <select>
          {this.state.enIsActive ? engDaysSelect : ruDaysSelect}
        </select>
      </div>

    );
  }
}

export default App;
