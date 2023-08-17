import React, { Component } from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

//import { withStyles } from '@mui/material/styles'
//import { withStyles } from '@mui/styles';

/*
const styles = {
  root: {
    width: '100%',
    //marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
};
*/

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
    //const { classes } = this.props;
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
              <TableCell>기능</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {
              //map을 이용해서 for문을 만든다(python과 동일)
              //3항 연산자 사용
              this.state.customers ? this.state.customers.map(c => {
                return(
                  <Customer
                    stateRefresh={this.stateRefresh}
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
          </tbody>
        </Table>
        <CustomerAdd stateRefresh={this.stateRefresh} />
      </Paper>
    );
  }
}

//export default withStyles(styles)(App);
export default App;
