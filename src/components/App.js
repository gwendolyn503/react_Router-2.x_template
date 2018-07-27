import React,{Component} from 'react';
import style from './app.scss';
import NaviLink from './NavLink';

export default class App extends Component{
		render(){

			return (
					<div>
						<ul>
							<li>
								<NaviLink to="" onlyActiveOnIndex>Home</NaviLink>
							</li>							
							<li>
								<NaviLink to="/about">About</NaviLink>
							</li>
							<li>
								<NaviLink to="/repos">Repos</NaviLink>
							</li>
						</ul>
						子组件的内容渲染到下面
						{this.props.children}
					</div>
				);
	}
}