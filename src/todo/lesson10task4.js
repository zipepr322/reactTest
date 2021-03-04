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
        <td>
          <a
            href={this.props.link}
            onClick={this.props.showMessage.bind(null, 4)}
          >
            {this.props.link}
          </a>
        </td>
      </tr>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      worker:[
        {name: 'Alex', surname: 'Kostenko', age:25, link: 'www.google.com'},
        {name: 'David', surname: 'Dubliakov', age:22, link: 'www.google.com'},
        {name: 'Max', surname: 'Yashchenko', age:31, link: 'www.google.com'}
      ],
      taskText: `4
        Модифицируйте предыдущую задачу. 
        Пусть теперь showMessage параметром принимает число и выводит его на экран. 
        Сделайте так, чтобы по клику на ссылку на экран выводился номер юзера в массиве юзеров.
      `,
    };
  }

  showMessage(index, number){
    alert("its user #" + index + " " + "and he got number"+ " " + number)
  }

  render() {
    const workerList= this.state.worker.map((value, index)=>{
      return <Worker
        key={index}
        name={this.state.worker[index].name}
        surname={this.state.worker[index].surname}
        age={this.state.worker[index].age}
        link={this.state.worker[index].link}
        showMessage={this.showMessage.bind(this, index)}
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