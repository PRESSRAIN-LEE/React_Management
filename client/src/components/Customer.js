import React from 'react';
import CustomerDelete from './CustomerDelete';

/*
class Customer extends React.Component{
	render(){
		//props로 진행
		return(
			<div>
				<CustomerProfile
					id={this.props.id}
					image={this.props.image}
					name={this.props.name}
					/>
				<CustomerInfo
					birthday = {this.props.birthday}
					gender = {this.props.gender}
					job = {this.props.job}
				/>
			</div>
		);
	}
}
*/

function Customer(props){
	//props로 진행
	return(
		<div style={{display: "flex", flexDirection: "row"}}>
			<CustomerProfile
				id={props.id}
				image={props.image}
				name={props.name}
				/>
			<CustomerInfo
				birthday = {props.birthday}
				gender = {props.gender}
				job = {props.job}
			/>
			<CustomerDelete
				stateRefresh={props.stateRefresh} 
				id={props.id}
			/>
		</div>
	);
}

//구조화
/*class CustomerProfile extends React.Component{
	render(){
		return(
			<div>
				<img src={this.props.image} alt='profile'/>
				<h2>{this.props.name} ({this.props.id})</h2>
			</div>
		);
	}
}*/
function CustomerProfile (props){
	return(
		<div style={{display: "flex", flexDirection: "row"}}>
			<img src={props.image} alt='profile'/>
			<h2>{props.name} ({props.id})</h2>
		</div>
	);
}

class CustomerInfo extends React.Component{
	render(){
		return(
			<div style={{display: "flex", flexDirection: "row"}}>
				<p>{this.props.birthday}</p>
				<p>{this.props.gender}</p>
				<p>{this.props.job}</p>
			</div>
		);
	}
}

export default Customer;