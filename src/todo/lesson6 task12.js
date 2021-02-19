import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {name: 'Коля', age: 30},
        {name: 'Вася', age: 40},
        {name: 'Петя', age: 50}
      ],
      inputValues: {name: '', age: ''}
    };
  }

  taskText = `
 Дан следующий массив:

this.state = {
\tusers: [
\t\t{name: 'Коля', age: 30},
\t\t{name: 'Вася', age: 40},
\t\t{name: 'Петя', age: 50},
\t]
};
Выведите его на экран в виде таблицы:

<table>
\t<tr>
\t\t<td>Коля</td><td>30</td>
\t</tr>
\t<tr>
\t\t<td>Коля</td><td>40</td>
\t</tr>
\t<tr>
\t\t<td>Коля</td><td>50</td>
\t</tr>
</table>
Сделайте 2 инпута и кнопку, по нажатию на которую в список добавится новая tr с именем и возрастом.
  `;

  handleChangeName(event){
    this.setState({...this.state, inputValues: {...this.state.inputValues, name: event.target.value}})
  }

  handleChangeAge(event){
    this.setState({...this.state, inputValues: {...this.state.inputValues, age: event.target.value}})
  }

  addField() {
    if (this.state.inputValues.name && this.state.inputValues.age){
      this.state.users.push(this.state.inputValues);
      this.setState({users: this.state.users, inputValues: {name: '', age: ''}});
    }
  }

  render() {
    const listNames= this.state.users.map((value, index)=>{
      return <tr key={index}>
        <td>{value.name}</td>
        <td>{value.age}</td>
      </tr>
    });

    return (
      <div>
        <h3>{this.taskText}</h3>
        <table>
          {listNames}
        </table>
        <div>
          <input
            type="text"
            placeholder="Имя"
            value={this.state.inputValues.name}
            onChange={this.handleChangeName.bind(this)}
          />
          <input
            type="number"
            placeholder="Возраст"
            value={this.state.inputValues.age}
            onChange={this.handleChangeAge.bind(this)}
          />
          <button onClick={()=>this.addField()}>Добавить</button>
        </div>
      </div>
    );
  }
}

export default App;
