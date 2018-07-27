import React,{Component} from 'react';
import {Link,hashHistory} from 'react-router';
export default class extends Component{
	handlerSubmit = e =>{
		e.preventDefault();
		const userName=this.refs.userName.value;
		const repoName=this.refs.repoName.value;
		hashHistory.push(`/repos/${userName}/${repoName}`);
	};
	render(){
		//console.log(this.props)
		return (
				<div>
					<p>Repos</p>
					<ul>
						<li><Link to="/repos/reactjs/react-router">React router</Link></li>
						<li><Link to="/repos/vuejs/react-router">vue router</Link></li>
					</ul>
					第三层嵌套
					{this.props.children}

					<form onSubmit={this.handlerSubmit}>
						<input type="text" ref="userName" placeholder="用户名"/>
						<input type="text" ref="repoName" placeholder="资源名"/>
						<button type="submit">go</button>

					</form>
				</div>
			);
	}
}