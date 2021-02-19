import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hrefs: [
        {href: '1.html', text: 'ссылка 1'},
        {href: '2.html', text: 'ссылка 2'},
        {href: '3.html', text: 'ссылка 3'},
      ],
      inputValues: {href: '', text: ''}
    };
  }

  handleRefChange(event){
    this.setState({...this.state, inputValues: {...this.state.inputValues, href: event.target.value}})
  }

  handleTextChange(event){
    this.setState({...this.state, inputValues: {...this.state.inputValues, text: event.target.value}})
  }

  addField(){
    this.state.hrefs.push(this.state.inputValues);
    this.setState({...this.state, hrefs: this.state.hrefs, inputValues: {href: '', text: ''}});

  }

  render() {
    const listNames= this.state.hrefs.map((value, index)=>{
      return <li key={index}>
        <a href={value.href}>{value.text}</a>
      </li>
    });

    return (
      <div>
        <ul>
          {listNames}
        </ul>
        <div>
          <input
            type="text"
            placeholder="ссылка"
            value={this.state.inputValues.href}
            onChange={this.handleRefChange.bind(this)}
          />
          <input
            type="text"
            placeholder="текст"
            value={this.state.inputValues.text}
            onChange={this.handleTextChange.bind(this)}
          />
          <button onClick={()=>this.addField()}>Добавить</button>
        </div>
      </div>
    );
  }
}

export default App;
