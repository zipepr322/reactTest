import React from 'react'
class Worker extends React.Component{
  constructor() {
    super();
  }
  render() {

    return(
      <tr>
        <td> {this.props.name}</td>
        <td> {this.props.surname}</td>
        <td> {this.props.age}</td>
      </tr>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      worker:[
        {name: 'Alex', surname: 'Kostenko', age:25},
        {name: 'David', surname: 'Dubliakov', age:22},
        {name: 'Max', surname: 'Yashchenko', age:31}
      ],
      taskText: `1
        Пусть в стейте хранится массив с юзерами.
        У каждого юзера есть имя, фамилия и возраст. 
        Выведите всех юзеров на экран в виде таблицы. 
        Пусть отображением юзера на экран занимается отдельный компонент.
      `,
    };
  }

  render() {
    const workerList= this.state.worker.map((value, index)=>{
      return <Worker
        key={index}
        name={this.state.worker[index].name}
        surname={this.state.worker[index].surname}
        age={this.state.worker[index].age}
      />
    });

    return (
      <div>
        <table>
          <tbody>
          {workerList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;