import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      liValues:[
        'firstValue',
        'secondValue',
        'thirdValue',
        'fourthValue',
        'fifthValue'
      ],
      liState:[
        false,
        false,
        false,
        false,
        false
      ],

      textDecoration: '',

      value: false
    };
  }

  handleChange(event){
    this.state.liState[Number(event.target.value)]=!this.state.liState[Number(event.target.value)];
    this.setState({...this.state, liState: this.state.liState});
    console.log(this.state.liState)
  }

  render() {
    const options=this.state.liValues.map((value,index)=>{
      return <li key={index} style={{display: 'flex', alignItems: 'center'}}>
        <input
          type="checkbox"
          onChange={this.handleChange.bind(this)}
          value={index}
        />
        {this.state.liState[index] ? <p style={{textDecoration: 'line-through'}}>{value}</p> : <p>{value}</p>}
      </li>
    });

    const taskText='Дан массив. ' +
      'Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы внутри каждой li был чекбокс, по нажатию на который содержимое чекбокса будет перечеркиваться.';

    return (
      <div>
        {taskText}
        <ul>
          {options}
        </ul>
      </div>
    );
  }
}

export default App;




// import React from 'react'
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       liOptions:[
//         {liValue: 'firstValue', liState: false},
//         {liValue: 'secondValue', liState: false},
//         {liValue: 'thirdValue', liState: false},
//         {liValue: 'fourthValue', liState: false},
//         {liValue: 'fifthValue', liState: false},
//       ],
//     };
//   }
//
//   handleChange(index){
//     // this.state.liOptions[index].liState=!this.state.liOptions[index].liState;
//     // this.setState({...this.state, liOptions:{...this.state.liOptions, liState: this.state.liOptions[index].liState}});
//     console.log(this.state.liOptions);
//     // console.log(this.state.liOptions[index].liState)
//   }
//
//   render() {
//     const options=this.state.liOptions.map((value,index)=>{
//       return <li key={index} style={{display: 'flex', alignItems: 'center'}}>
//         <input
//           type="checkbox"
//           onChange={()=>{this.handleChange(index)}}
//         />
//         {this.state.liOptions[index].liState ? <p style={{textDecoration: 'line-through'}}>{value.liValue}</p> : <p>{value.liValue}</p>}
//       </li>
//     });
//     return (
//       <div>
//         <ul>
//           {options}
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default App;
