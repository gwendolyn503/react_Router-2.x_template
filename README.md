#React Router 2.x
=
cnpm i react-router -S</br>
npm info react-router-----------------查看版本(为了学习router2.0)</br>
cnpm i react@15.6.2 react-dom@15.6.2 -S</br>
cnpm i react-router@2.0.1 -S</br>
</br>
<strong>##总结：</strong>

1.进行模块安装 </br>
2.Router,Route,hashHistory,Link,activeClassName,NavLink,IndexLink,</br>
onlyActiveOnIndex,push,this.props.children</br>
3.要建立一个最为基本的路由，必须有三个内容</br>
hashHistory，Router(确认整个路由对象),Route(确定当前的路由对象 path,component)</br>
```
<Router history={hashHistory}>
          <Route></Route>
</Router>
```
4.要链接就Link，有链接就有目标，该目标就是to，不用a标签的主要因素是高亮，实现高亮的方法是activeClassName</br>
5.实现嵌套方式很简单，路由设置的时候只需要将Route进行标签式嵌套就可以了，但是需要在“主组件”里面写this.props.children进行子组件的渲染操作</br>
6.参数：设参，传参，接参</br>
设参在路由 传参在链接 接参在组件</br>
:argument,xxx,this.props.params.argument</br>
7.IndexRoute,首页的路由，该操作不需要设置path，只需要设置component对应的组件即可</br>
8.onlyActiveOnIndex，IndexLink都可以解决首页的高亮显示的特殊性问题</br>
9.程序式路由跳转，也就是用js方式实现路由的跳转，hashHistory.push('')</br>
10.重定向可以利用*，对应到指定的component组件</br>
