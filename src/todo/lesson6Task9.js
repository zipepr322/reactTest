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

  deleteName(index){
    this.state.items.splice(index, 1);
    this.setState({...this.state, items: this.state.items})
  }

  render() {
    const listNames= this.state.items.map((value, index)=>{
      return <li key={index}>
        {value}
        <button onClick={()=>{this.deleteName(index)}}>Удалить</button>
      </li>
    });

    return (
      <div>
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