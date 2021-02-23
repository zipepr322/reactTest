import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      inputValLength: '',
      taskText: `11
        Дан инпут. В него вводится строка. 
        Сделайте так, чтобы если длина введенной строки от 4 до 9 символов - граница инпута была зеленой, в противном случае - красной. 
        Инпут должен проверять свое содержимое по мере ввода.
      `,
    };
  }
  handleInputChange(e){
    console.log(e.target.value.length);
    this.setState({...this.state, inputVal: e.target.value, inputValLength: e.target.value.length})
  }

  render() {

    return (
      <div>
        {this.state.taskText}
        {this.state.inputValLength <10 && this.state.inputValLength >3
          ? <input
            type="text"
            style={{backgroundColor: 'green'}}
            value={this.state.inputVal}
            onChange={(e)=>{this.handleInputChange(e)}}
          />
          : <input
            type="text"
            style={{backgroundColor: 'red'}}
            value={this.state.inputVal}
            onChange={(e)=>{this.handleInputChange(e)}}
          />
        }
      </div>

    );
  }
}

export default App;
