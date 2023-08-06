import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

//배열
const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '20000101',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김길동',
    'birthday': '20010101',
    'gender': '남자',
    'job': '직장인'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이길동',
    'birthday': '20020101',
    'gender': '여자',
    'job': '개발자'
  }
]

/*
function App() {
  return (
    <Customer
      name = {customer.name}
      birthday = {customer.birthday}
      gender = {customer.gender}
      job = {customer.job}
    />
  );
}
*/


class App extends Component {
  render(){
    return (
      <div>
        {
          //map을 이용해서 for문을 만든다(python과 동일)
          customers.map(c => {
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
}


export default App;
