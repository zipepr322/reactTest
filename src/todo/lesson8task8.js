import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textAreaCurrentValue: '',
      textAreaValue:[],
      taskText: `
      Дан текстареа и кнопка. В текстареа пользователь нашего сайта будет вводить свои заметки. 
      После нажатия на кнопку введенный текст должен появится под текстареа в виде блока div. Таких заметок может быть много. 
      В каждой заметке должен стоять заголовок (заметка1, заметка2 и так далее), время создания заметки (часы, минуты, секунды), 
      а также должна быть кнопка 'удалить' и кнопка 'редактировать'.
      `,
      hours:[],
      minutes:[],
      seconds:[],
      editing: [],
      inputValue:''
    };
  }

  handleTextAreaChange(e){
    this.setState({...this.state, textAreaCurrentValue: e.target.value})
  }

  addNote(){
    if (this.state.textAreaCurrentValue){
      this.state.textAreaValue.push(this.state.textAreaCurrentValue);
      this.state.hours.push(new Date().getHours());
      this.state.minutes.push(new Date().getMinutes());
      this.state.seconds.push(new Date().getSeconds());
      this.state.editing.push(false);
      this.setState({
        ...this.state,
        textAreaValue: this.state.textAreaValue,
        hours: this.state.hours,
        minutes: this.state.minutes,
        seconds: this.state.seconds,
        editing: this.state.editing,
        textAreaCurrentValue: '',
      })
    }
  }

  deleteNote(index){
    this.state.textAreaValue.splice(index,1);
    this.state.hours.splice(index,1);
    this.state.minutes.splice(index,1);
    this.state.seconds.splice(index,1);
    this.state.editing.splice(index,1);
    this.setState({
      ...this.state,
      textAreaValue: this.state.textAreaValue,
      hours: this.state.hours,
      minutes: this.state.minutes,
      seconds: this.state.seconds,
      editing: this.state.editing
    })
  }

  inputCorrect(index){
    const editedArr= this.state.editing.map((value, i)=>{
      if(index === i){
        return value= !this.state.editing[index];
      }
      else return value= false;
    });
    this.setState({editing: editedArr})
  }

  handleInputChange(e, index){
    const changedArr= this.state.textAreaValue.map((value,i)=>{
      if (i === index){
        return value= e.target.value
      }
      else return value
    });

    this.setState({textAreaValue: changedArr})
  }

  render() {
    const textAreaBlock=
      <div>
          <textarea
            value={this.state.textAreaCurrentValue}
            onChange={(e)=>this.handleTextAreaChange(e)}
          >
            {this.state.textAreaCurrentValue}
          </textarea>
        <button onClick={()=> this.addNote()}>Add note</button>
      </div>;
    const notesList= this.state.textAreaValue.map((value, index)=>{
      return <div key={index} style={{border: '1px solid black'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          {this.state.editing[index]
            ? <input type="text" value={this.state.textAreaValue[index]} onChange={(e)=>{this.handleInputChange(e,index)}}/>
            :<p>Заметка:{index+1}</p>
          }
          <div style={{display: 'flex', marginLeft: '1%'}}>
            <div>Время:&nbsp;{this.state.hours[index]}:</div>
            {`${this.state.minutes[index]}` < 10 ? <div>0{this.state.minutes[index]}:</div> : <div>{this.state.minutes[index]}:</div>}
            {`${this.state.seconds[index]}` < 10 ? <div>{this.state.seconds[index]}</div> : <div>{this.state.seconds[index]}</div>}
          </div>
        </div>
        <p style={{fontWeight:'bold'}}>{value}</p>
        <button onClick={()=>{this.deleteNote(index)}}>удалить</button>
        <button onClick={()=>{this.inputCorrect(index)}}>редактировать</button>
      </div>
    });

    return (
      <div>
        {this.state.taskText}
        {textAreaBlock}
        {notesList}
      </div>
    );
  }
}

export default App;
