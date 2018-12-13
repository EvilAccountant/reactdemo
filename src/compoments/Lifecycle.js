import React from 'react';
import Axios from 'axios';

/**
 * React生命周期函数:
 * 组件加载前 组件加载完成 组件更新数据 组件销毁
 *
 * 组件加载触发函数：
 * constructor componentWillMount render componentDidMount
 *
 * 组件数据更新函数：
 * shouldComponentUpdate componentWillUpdate render componentDidUpdate
 *
 * 在父组件中改变props传值的时候：
 * componentWillReceiveProps
 *
 * 组件销毁：
 * componentWillUnmount
 */
class Lifecycle extends React.Component{

    constructor(props){

        console.log('01构造函数 启动！constructor')
        super(props);

        this.state = {
            list: [
                {title:1},
                {title:2},
                {title:3},
                {title:4}]
        };
    }

    //组件即将挂载
    componentWillMount() {
        console.log('02组件即将启动！componentWillMount');
    }

    //组件挂载完成
    componentDidMount() {
        //请求数据 DOM操作
        console.log('04组件启动完毕！componentDidMount')
    }

    getData=()=>{
        Axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20')
            .then((response)=> {
                console.log(response);

                this.setState({
                    list: response.data.result
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        console.log('03数据渲染 启动！render');
        return(
            <div>
                <h2>生命周期</h2>
                <button onClick={this.getData}>改变List数据</button>
                <hr/>
                {this.state.list.map((value,key)=>{
                    return <p key={key}>{value.title}</p>
                })}
            </div>
        );
    }

}

export default Lifecycle;