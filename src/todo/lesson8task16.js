import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      test: [
        {
          question: 'Вопрос 1',
          answers: [
            'Ответ1',
            'Ответ2',
            'Ответ3',
            'Ответ4',
            'Ответ5',
          ],
          right: 3, //номер правильного ответа
        },
        {
          question: 'Вопрос 2',
          answers: [
            'Ответ1',
            'Ответ2',
            'Ответ3',
            'Ответ4',
            'Ответ5',
          ],
          right: 5, //номер правильного ответа
        },
        {
          question: 'Вопрос 3',
          answers: [
            'Ответ1',
            'Ответ2',
            'Ответ3',
            'Ответ4',
            'Ответ5',
          ],
          right: 2, //номер правильного ответа
        },
      ],
      firstOption: '',
      secondOption: '',
      thirdOption: '',
      firstOptionIndex: '',
      secondOptionIndex: '',
      thirdOptionIndex: '',
      taskText: `16
        Реализуйте текст с вопросами и вариантами ответов. 
        Каждый вопрос должен быть в своем абзаце, а под ним - 5 радиокнопочек, с помощью которых можно выбрать один из ответов. 
        Если ответ правильный - вопрос должен покраситься в зеленый цвет, а если неправильный - в красный.
      `,
    };
  }
  firstOptionChange(e,index){
    this.setState({...this.state, firstOption: this.state.test[0].answers[index], firstOptionIndex: index});
  }
  secondOptionChange(e,index){
    this.setState({...this.state, secondOption: this.state.test[1].answers[index], secondOptionIndex: index});
  }
  thirdOptionChange(e,index){
    this.setState({...this.state, thirdOption: this.state.test[2].answers[index], thirdOptionIndex: index});
  }

  render() {

    const firstAnswers= this.state.test[0].answers.map((value,index)=>{
      return <input
        key={index}
        type="radio"
        value={value}
        checked={this.state.firstOption === value}
        onChange={(e)=>{this.firstOptionChange(e,index)}}
      />
    });
    const secondAnswers=this.state.test[1].answers.map((value,index)=>{
      return <input
        key={index}
        type="radio"
        value={value}
        checked={this.state.secondOption === value}
        onChange={(e)=>{this.secondOptionChange(e,index)}}
      />
    });
    const thirdAnswers=this.state.test[2].answers.map((value,index)=>{
      return <input
        key={index}
        type="radio"
        value={value}
        checked={this.state.thirdOption === value}
        onChange={(e)=>{this.thirdOptionChange(e,index)}}
      />
    });
    return (
      <div>
        {this.state.firstOptionIndex+1 === this.state.test[0].right && <div style={{backgroundColor:'green'}}>{this.state.test[0].question}</div>}
        {this.state.firstOptionIndex+1 !== this.state.test[0].right && this.state.firstOptionIndex !== '' && <div style={{backgroundColor:'red'}}>{this.state.test[0].question}</div>}
        {this.state.firstOptionIndex === '' && <div>{this.state.test[0].question}</div>}
        <div>
          {firstAnswers}
        </div>
        {this.state.secondOptionIndex+1 === this.state.test[1].right && <div style={{backgroundColor:'green'}}>{this.state.test[1].question}</div>}
        {this.state.secondOptionIndex+1 !== this.state.test[1].right && this.state.secondOptionIndex !== '' && <div style={{backgroundColor:'red'}}>{this.state.test[1].question}</div>}
        {this.state.secondOptionIndex === '' && <div>{this.state.test[1].question}</div>}
        <div>
          {secondAnswers}
        </div>
        {this.state.thirdOptionIndex+1 === this.state.test[2].right && <div style={{backgroundColor:'green'}}>{this.state.test[1].question}</div>}
        {this.state.thirdOptionIndex+1 !== this.state.test[2].right && this.state.thirdOptionIndex !== '' && <div style={{backgroundColor:'red'}}>{this.state.test[2].question}</div>}
        {this.state.thirdOptionIndex === '' && <div>{this.state.test[2].question}</div>}
        <div>
          {thirdAnswers}
        </div>
      </div>
    );
  }
}

export default App;