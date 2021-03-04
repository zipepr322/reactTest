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
            onClick={this.props.showMessage}
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
      taskText: `2
        Модифицируйте предыдущую задачу. 
        Пусть у компонента-родителя есть метод showMessage, который алертом выводит '!'. 
        Передайте этот метод в компонент-потомок. В таблице с юзерами сделайте еще одну колонку со ссылками. 
        Привяжите к клику по этим ссылкам переданный метод.
      `,
    };
  }

  showMessage(event){
    event.preventDefault();
    alert('!')
  }

  render() {
    const workerList= this.state.worker.map((value, index)=>{
      return <Worker
        key={index}
        name={this.state.worker[index].name}
        surname={this.state.worker[index].surname}
        age={this.state.worker[index].age}
        link={this.state.worker[index].link}
        showMessage={this.showMessage.bind(this)}
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