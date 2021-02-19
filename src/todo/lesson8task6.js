import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {name: 'Коля', age:30, ageButtonState: false, nameButtonState: false},
        {name: 'Вася', age:40, ageButtonState: false, nameButtonState: false},
        {name: 'Петя', age:50, ageButtonState: false, nameButtonState: false},
      ],
      taskText: `Сделайте так, чтобы внутри каждой td была кнопка 'редактировать', 
      по нажатию на которую текст этой td можно будет поредактировать с помощью появившегося в ней инпута.
      Выведите его на экран в виде таблицы:
      `
    };
  }

  handleChangeName(index){
    const changedState=this.state.users.map((newArr, i)=>{
      if (index === i){
        return {...newArr, nameButtonState: !this.state.users[index].nameButtonState }
      }
      else return {...newArr}
    });

    this.setState({users:changedState})
  }

  handleChangeAge(index){
    const changedState=this.state.users.map((newArr, i)=>{
      if (index === i){
        return {...newArr, ageButtonState: !this.state.users[index].ageButtonState }
      }
      else return {...newArr}
    });

    this.setState({users:changedState})
  }

  handleChangeInputName(event, index){
    const changedState=this.state.users.map((newArr, i)=>{
      if (index === i){
        return {...newArr, name: event.target.value }
      }
      else return {...newArr}
    });
    this.setState({users:changedState})
  };

  handleChangeInputAge(event, index){
    const changedState=this.state.users.map((newArr, i)=>{
      if (index === i){
        return {...newArr, age: event.target.value }
      }
      else return {...newArr}
    });
    this.setState({users:changedState})
  }

  render() {
    const tableList= this.state.users.map((value, index)=>{
      return <tr key={index}>
        {this.state.users[index].nameButtonState
          ? <td>
            <input
              type="text"
              value={this.state.users[index].name}
              onChange={(event)=>this.handleChangeInputName(event, index)}
            />
            <button
              value={this.state.users[index].nameButtonState}
              onClick={()=>this.handleChangeName(index)}
            > set name
            </button>
          </td>
          : <td>
            {value.name}
            <button
              value={this.state.users[index].nameButtonState}
              onClick={()=>this.handleChangeName(index)}
            > set name
            </button>
          </td>
        }
        {this.state.users[index].ageButtonState
          ? <td>
            <input
              type="number"
              value={this.state.users[index].age}
              onChange={(event)=>this.handleChangeInputAge(event, index)}
            />
            <button
              value={this.state.users[index].ageButtonState}
              onClick={()=>this.handleChangeAge(index)}
            > set age
            </button>
          </td>
          :<td>
            {value.age}
            <button
              value={this.state.users[index].ageButtonState}
              onClick={()=>this.handleChangeAge(index)}
            > set age
            </button>
          </td>
        }
      </tr>
    });

    return (
      <div>
        <table>
          <tbody>
          {tableList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;


