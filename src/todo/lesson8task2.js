import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      worker:[
        {name: 'Alex', surname: 'Kostenko', salary: 2000, checked: true},
        {name:'David', surname: 'Dubliakov', salary: 1500, checked: true},
        {name: 'Max', surname: 'Yashchenko', salary: 1000, checked: true},
      ],
    };
  }

  salaryCalc(someState){
    let totalSumCalc= 0;

    for(let i=0; i < someState.worker.length; i++){
      if(someState.worker[i].checked){
        totalSumCalc += someState.worker[i].salary;
      }
    }
    return totalSumCalc
  }

  handleChange(index){
    const changedState=this.state.worker.map((newArr, i)=>{
      if(i === index){
        return {...newArr, checked: !newArr.checked}
      }
      else return {...newArr}
    });

    this.setState({worker: changedState});
  }

  render() {
    const list=this.state.worker.map((value,index)=>{
      return <tr key={index}>
        <td>{value.name}</td>
        <td>{value.surname}</td>
        <td>{value.salary}</td>
      </tr>
    });
    const workersCheckbox=this.state.worker.map((value, index)=>{
      return <input
        key={index}
        type="checkbox"
        checked={this.state.worker[index].checked}
        onChange={()=>{this.handleChange(index)}}
      />
    });

    return (
      <div>
        <div style={{display: 'flex'}}>
          <table>
            <tbody>
            {list}
            </tbody>
          </table>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
            {workersCheckbox}
          </div>
        </div>
        <p>Total salary:{this.salaryCalc(this.state)}</p>
      </div>
    );
  }
}

export default App;


