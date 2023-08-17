import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class CustomerDelete extends React.Component {
	//state값 초기화
	constructor(props) {
		super(props);
		this.state = {
			open: false		//현재 모달창이 열려 있는지 체크
		}
	}

	//추가 모달 창
	handleClickOpen = () => {
		this.setState({
			open: true
		});
	  }
	  //닫기 창
	  handleClose = () => {
		this.setState({
			open: false
		});
	  }

	//삭제 API함수 생성
	deleteCustomer(id){
		const url = '/api/customers/' + id;
		fetch(url, {
			method: 'DELETE'
		});
		this.props.stateRefresh();
	}
  render() {
	return (
	<div>
	  <Button variant="contained" color="secondary" onClick={ this.handleClickOpen }>삭제</Button>

	  <Dialog open={this.state.open} onClose={this.handleClose}>
		<DialogTitle onClose={this.handleClose}>
			삭제 경고
		</DialogTitle>
		
		<DialogContent>
			<Typography gutterBottom>
				선택한 고객 정보가 삭제 됩니다.
			</Typography>
		</DialogContent>

		<DialogActions>
			<Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</Button>
			<Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
		</DialogActions>
	  </Dialog>
	</div>
	);
  }
}

export default CustomerDelete;