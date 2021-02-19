import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      worker:[
        {name: 'Alex', surname: 'Kostenko', salary: 2000, checked: true},
        {name:'David', surname: 'Dubliakov', salary: 1500, checked: true},
        {name: 'Max', surname: 'Yashchenko', salary: 1000, checked: true},
      ],
      taskText: `
        Дан массив с работниками. 
        У каждого работника есть имя, фамилия, зарплата. 
        Выведите этих работников на экран в виде таблицы. 
        Сделайте так, чтобы работников можно было посортировать по любой колонке этот таблицы.
      `,
    };
  }

  handleNameSort(){
   console.log(this.state.worker) ;
  }

  render() {
    const workersList= this.state.worker.map((value, index)=>{
      return <tr key={index}>
        <td>{value.name}</td>
        <td>{value.surname}</td>
        <td>{value.salary}</td>
      </tr>
    });
    return (
      <div>
        <table>
          <tbody>
          {workersList}
          </tbody>
        </table>
        <button onClick={()=>{this.handleNameSort()}}>Name sort</button>
        <button>Surname sort</button>
        <button>Salary sort</button>
      </div>

    );
  }
}

export default App;
