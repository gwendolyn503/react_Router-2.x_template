import React,{Component} from 'react';

export default class Repo extends Component{
	render(){
		// console.log(this.props);
		return (
			<div>
				<p>Repo</p>
				<p>userName:{this.props.params.userName}</p>
				<p>repoName:{this.props.params.repoName}</p>
			</div>
		);
	}
}