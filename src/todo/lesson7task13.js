import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDay: new Date().getDate(),
      currentMonth: new Date().getMonth()+1,
      currentYear:new Date().getFullYear(),
      yearQuantity:[],
      weekDays:['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
      months:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      totalMonthDays: new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate(),
      currentDate:new Date(),
      dayValue:new Date().getDay(),
      monthValue:new Date().getMonth().toString(),
    };
  }

  daysArr(maxDays){
    const arr=[];
    for(let i=1; i<=maxDays; i++){
      arr.push(i);
    }
    return arr
  }

  yearsArr(){
    const arr=[];
    for(let i=1970; i <= new Date().getFullYear(); i++){
      arr.push(i);
    }
    return arr
  }


  chosenDate(year, month, day) {
    return this.state.weekDays[new Date(year, month, day).getDay()]
  }

  handleDayChange(event){
    this.setState({...this.state, currentDay: Number(event.target.value)})
  }

  handleMonthChange(event){
    this.setState({
      ...this.state,
      currentMonth: Number(event.target.value),
      totalMonthDays: new Date(Number(this.state.currentYear), Number(event.target.value),0).getDate()
    });
  }

  handleYearChange(event){
    this.setState({...this.state, currentYear: Number(event.target.value)});
  }

  render() {
    const dayOptions=this.daysArr(this.state.totalMonthDays).map((value,index)=>{
      return <option key={index}>{value}</option>
    });
    const monthOptions=this.state.months.map((value,index)=>{
      return <option key={index}>{value}</option>
    });
    const yearOptions=this.yearsArr().map((value,index)=>{
      return <option key={index}>{value}</option>
    });
    const taskText='Даны 3 селекта. В первом можно выбрать день, во втором месяц, а в третьем год. ' +
      'Дан абзац. Сделайте так, чтобы в этот абзац вывелся день недели за выбранную дату. Пусть по умолчанию в селекте отображается текущая дата.';

    return (
      <div>
        {/*{console.log(this.state.totalMonthDays)}*/}
        {/*{console.log( typeof this.state.currentYear)}*/}
        {console.log( new Date(this.state.currentYear, this.state.currentMonth,0).getDate())}
        {console.log( new Date(this.state.currentYear, this.state.currentMonth,this.state.currentDay))}
        {console.log(this.state.currentMonth)}

        <h2>{taskText}</h2>
        {this.chosenDate(this.state.currentYear, this.state.currentMonth-1, this.state.currentDay)}
        <select value={this.state.currentDay} onChange={this.handleDayChange.bind(this)} >
          {dayOptions}
        </select>
        <select value={this.state.currentMonth} onChange={this.handleMonthChange.bind(this)}>
          {monthOptions}
        </select>
        <select value={this.state.currentYear} onChange={this.handleYearChange.bind(this)}>
          {yearOptions}
        </select>
      </div>
    );
  }
}

export default App;

