import style from './index.scss';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import App from './components/App';
import Repos from './components/Repos';
import Repo from './components/Repo';
import Home from './components/Home';

import {Router,Route,hashHistory,IndexRoute} from 'react-router';
export default class Index extends React.Component{
		render(){
			return (
					<Router history={hashHistory}>
						<Route path="/" component={App} >	
							<IndexRoute component={Home}/>				
							<Route path="/about" component={About} />
							<Route path="/repos" component={Repos} >
								<Route path="/repos/:userName/:repoName" component={Repo} />
							</Route>
							<Route path="*" component={Home}/>
						</Route>
					</Router>
				)
	}
}

ReactDOM.render(<Index />,document.getElementById('app'));



