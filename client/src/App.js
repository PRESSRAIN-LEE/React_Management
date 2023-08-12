import React, { Component } from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';

/*
function App() {
  return (
      <div>
        {
          //map을 이용해서 for문을 만든다(python과 동일)
          this.state.customers.map(c => {
            return(
              <Customer
                key = {c.id}    //map을 사용하면 key값은 필수(unique)
                id = {c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />
            );
          })
        }
      </div>
    );
}
*/

class App extends Component {
  //생성자
  constructor(props){
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    //state를 초기화 시킴
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    return (
      <div>
        {
          //map을 이용해서 for문을 만든다(python과 동일)
          //3항 연산자 사용
          this.state.customers ? this.state.customers.map(c => {
            return(
              <Customer
                key = {c.id}    //map을 사용하면 key값은 필수(unique)
                id = {c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />
            );
          })
        : ""}

        <CustomerAdd stateRefresh={this.stateRefresh} />
      </div>
    );
  }
}

export default App;
