import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {name: 'Коля', checked: false},
        {name: 'Вася', checked: false},
        {name: 'Петя', checked: false},
      ],
      taskText: `Дан массив. Выведите элементы этого массив в виде списка ul. 
      Сделайте так, чтобы по нажатию на li внутри нее появился инпут, с помощью которого можно будет поредактировать текст этой li. 
      По потери фокуса текст из инпута должен записаться обратно в li, а инпут исчезнуть.
      `
    };
  }

  handleClick(index){
    if (!this.state.users[index].checked){
      const changedState=this.state.users.map((newArr, i)=>{
        if(i === index){
          return {...newArr, checked: !newArr.checked}
        }
        else return {...newArr, checked: false}
      });
      this.setState({users: changedState});
    }
  }

  handleInputChange(index, event){
    const changedState=this.state.users.map((newArr, i)=>{

      if(i === index){
        return {...newArr, name: event.target.value}
      }
      else return {...newArr}
    });

    this.setState({users: changedState});
  }

  handleBlurChange(index, event){
    const changedState=this.state.users.map((newArr, i)=>{
      if(i === index){
        return {...newArr, name: event.target.value, checked: false}
      }
      else return {...newArr}
    });

    this.setState({users: changedState});
  }

  render() {
    const arrValues= this.state.users.map((value, index)=>{
      return <li
        key={index}
        value={this.state.users[index].name}
        onClick={()=>{this.handleClick(index)}}
      >
        {value.checked
          ? <input
            type="text"
            value={value.name}
            onChange={(event)=>this.handleInputChange(index, event)}
            onBlur={(event)=>{this.handleBlurChange(index, event)}}
          />
          : value.name
        }
      </li>
    });

    return (
      <div>
        <ul>
          {arrValues}
        </ul>
        {this.state.taskText}
      </div>
    );
  }
}

export default App;


