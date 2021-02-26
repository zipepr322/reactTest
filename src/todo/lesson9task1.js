import React from 'react'

class User extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div style={{border: '1px solid black'}}>
      <p>имя: {this.props.name}</p>
      <p>фамилия: {this.props.surname}</p>
      <p>возраст: {this.props.age}</p>
    </div>;
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
      taskText: `lesson 9 task 1
        Пусть в стейте хранится массив с юзерами. 
        У каждого юзера есть имя, фамилия и возраст. 
        Выведите всех юзеров на экран с помощью цикла. 
        Сделайте так, чтобы отображением юзера на экран занимался отдельный компонент.
      `,
    };
  }


  render() {
    const workerList= this.state.worker.map((value, index)=>{
      return <User
        key={index}
        name={value.name}
        surname={value.surname}
        age={value.age}
      />
    });
    return (
      <div>
        {workerList}
      </div>
    );
  }
}

export default App;