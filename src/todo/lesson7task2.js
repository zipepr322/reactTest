import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {checked: false};
  }

  handleChange(){
    this.setState({checked: !this.state.checked})
  }

  render() {
    return (
      <div>
        <input type="checkbox" value={this.state.checked} onChange={this.handleChange.bind(this)}/>
        {this.state.checked ? <p>true</p> : <p>false</p>}
      </div>
    );
  }
}

export default App;
