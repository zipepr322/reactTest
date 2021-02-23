import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      workers:[
        {name: 'Alex', surname: 'Kostenko', salary: '2000', gender: 'male' },
        {name: 'David', surname: 'Dubliakov', salary: '1500', gender: 'male' },
        {name: 'Max', surname: 'Yashchenko', salary: '1000', gender: 'male' }
      ],
      newWorkerData:{
        name: '',
        surname: '',
        salary: '',
        gender: 'male',
      },
      genderVal:['male', 'female'],
      genderChoice: 0,
      taskText: `13
        Дан массив с работниками. 
        У каждого работника есть имя, фамилия, зарплата. 
        Выведите этих работников на экран в виде таблицы. 
        Причем выведите только первых 10 работников, а над таблицей сделайте ссылки: 1, 2, 3, 4 и так далее. 
        По нажатию на каждую ссылку в таблице будет отображаться заданный десяток работников. 
        Ссылки над таблицей должны сгенерироваться автоматически исходя из количества работников.
      `,
    };
  }
  handleNameChange(e){
    this.setState({...this.state, newWorkerData: {...this.state.newWorkerData, name: e.target.value}})
  }

  handleSurnameChange(e){
    this.setState({...this.state, newWorkerData: {...this.state.newWorkerData, surname: e.target.value}})
  }

  handleSalaryChange(e){
    this.setState({...this.state, newWorkerData: {...this.state.newWorkerData, salary: e.target.value}})
  }

  handleGenderChange(e){
    this.setState({
      ...this.state,
      genderChoice: e.target.value,
      newWorkerData: {...this.state.newWorkerData, gender: this.state.genderVal[e.target.value]},
    });
  }

  addWorker(){
    if (this.state.newWorkerData.name !== '' && this.state.newWorkerData.surname !== '' && this.state.newWorkerData.salary){
      this.state.workers.push(this.state.newWorkerData);
      this.setState({
        ...this.state, workers: this.state.workers,
        newWorkerData: {name: '', surname: '', salary: '', gender: '',}
      })
    }

  }

  render() {
    const workersList=this.state.workers.map((value, index)=>{
      return <tr key={index}>
        <td style={{backgroundColor: 'rgb(138 138 224)'}}> {value.name} </td>
        <td style={{backgroundColor: 'rgb(100 100 224)'}}> {value.surname} </td>
        <td style={{backgroundColor: 'rgb(100 224 213)'}}> {value.salary} </td>
        <td style={{backgroundColor: 'rgb(72 165 96)'}}> {value.gender} </td>
      </tr>
    });
    const workersGender= this.state.genderVal.map((val, index)=>{
      return <option key={index} value={index}>
        {val}
      </option>
    });
    return (
      <div>
        <table>
          <tbody>
          {workersList}
          </tbody>
        </table>
        <div>
          <div>
            <input
              type="text" placeholder='Enter worker`s name'
              value={this.state.newWorkerData.name}
              onChange={(e)=>{this.handleNameChange(e)}}
            />
          </div>
          <div>
            <input
              type="text" placeholder='Enter worker`s surname'
              value={this.state.newWorkerData.surname}
              onChange={(e)=>{this.handleSurnameChange(e)}}
            />
          </div>
          <div>
            <input
              type="number" placeholder='Enter worker`s salary'
              value={this.state.newWorkerData.salary}
              onChange={(e)=>{this.handleSalaryChange(e)}}
            />
          </div>
          <div>
            <select
              onChange={(e)=>{this.handleGenderChange(e)}}
              value={Number(this.state.genderChoice)}
            >
              {workersGender}
            </select>
          </div>
          <button onClick={()=>this.addWorker()}>add worker</button>
        </div>
      </div>

    );
  }
}

export default App;
