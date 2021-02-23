import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      worker:[
        {name: 'Alex', surname: 'Kostenko', salary: 2000},
        {name:'David', surname: 'Dubliakov', salary: 1500},
        {name: 'Max', surname: 'Yashchenko', salary: 1000},
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
    const compareArr=this.state.worker.sort(function (a,b) {
      const nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0
    });
    this.setState({...this.state, worker: compareArr});
  }

  handleSurnameSort(){
    const compareArr=this.state.worker.sort(function (a,b) {
      const nameA = a.surname.toLowerCase(),
        nameB = b.surname.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0
    });
    this.setState({...this.state, worker: compareArr});
  }

  handleSalarySort(){
    const compareArr=this.state.worker.sort(function (a,b) {
      const nameA = a.salary,
        nameB = b.salary;
      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;
      return 0
    });
    this.setState({...this.state, worker: compareArr});
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
        <button onClick={()=>{this.handleSurnameSort()}}>Surname sort</button>
        <button onClick={()=>{this.handleSalarySort()}}>Salary sort</button>
      </div>

    );
  }
}

export default App;
