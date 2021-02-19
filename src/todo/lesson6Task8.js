import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {items: ['Александр', 'Давид', 'Максим'], value: ''};
  }

  handleChange(event){
    this.setState({value:event.target.value})
  }

  addName(){
    this.state.items.push(this.state.value);
    this.setState({items: this.state.items, value:''})
  }


  taskText=`
  Дан массив с именами пользователей. 
  Выведите этот массив в виде списка ul. 
  Также даны инпут и кнопка. 
  Сделайте так, чтобы в инпут можно было ввести еще одно имя, нажать на кнопку - и это имя добавилось в конец списка ul.
  `;

  render() {
    const listNames= this.state.items.map((value, index)=>{
      return <li>{value}</li>
    });

    return (
      <div>
        <h3>{this.taskText}</h3>
        <input
          type="text"
          placeholder="Введите имя"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.addName.bind(this)}>Добавить имя</button>
        <ul>{listNames}</ul>
      </div>
    );
  }
}

export default App;
