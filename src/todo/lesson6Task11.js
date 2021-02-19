import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      values: ['firstElem', 'secondElem', 'thirdElem', 'fourthElem', 'fifthElem', 'sixthElem'],
      inputValue: ''
    };
  }

  taskText = `
  Дан массив. Выведите этот массив в виде списка ul. 
  Также даны инпут и кнопка. 
  Сделайте так, чтобы в инпут можно было ввести число, нажать на кнопку - и из списка ul удалился элемент с введенным в инпут номером.
  `;

  handleChange(event){
    this.setState({...this.state, inputValue: event.target.value})
  }

  deleteField() {
    this.state.values.splice(Number(this.state.inputValue-1), 1);
    this.setState({values: this.state.values, inputValue: ''});
  }

  render() {
    const listNames= this.state.values.map((value, index)=>{
      return <li key={index}>
        {value}
      </li>
    });

    return (
      <div>
        <h3>{this.taskText}</h3>
        <ul>
          {listNames}
        </ul>
        <div>
          <input
            type="number"
            placeholder="Enter number of element"
            value={this.state.inputValue}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={()=>this.deleteField()}>Delete</button>
        </div>
      </div>
    );
  }
}

export default App;
