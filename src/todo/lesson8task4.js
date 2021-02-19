import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {name: 'Коля', surname: 'Иванов', age: 30, checked: true},
        {name: 'Вася', surname: 'Петров', age: 40, checked: true},
        {name: 'Петя', surname: 'Сидоров', age: 50, checked: true},
      ],
      taskText: `Выведите элементы этого массива в виде списка ul. Имя, фамилия и возраст каждого юзера должны стоять в одной li через пробел. 
      Внутри каждой li сделайте чекбокс. Если чекбокс не отмечен, то в li должно быть только имя юзера, а если отмечен - имя, фамилия и возраст.
      `
    };
  }

  handleChange(index){
    const changedState=this.state.users.map((newArr, i)=>{
      if(i === index){
        return {...newArr, checked: !newArr.checked}
      }
      else return {...newArr}
    });

    this.setState({users: changedState});
  }

  render() {
    const arrValues= this.state.users.map((value, index)=>{
      return <li
        key={index}
        style={{display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <p>{value.name}&nbsp;</p>
        {value.checked && <p>{value.surname}&nbsp;</p>}
        {value.checked && <p>{value.age}&nbsp;</p>}
        <input
          type="checkbox"
          checked={this.state.users[index].checked}
          onChange={()=>{this.handleChange(index)}}
        />
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


