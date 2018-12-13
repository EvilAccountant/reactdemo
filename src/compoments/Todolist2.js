import React from 'react'
import Storage from '../model/storage'

class Todolist2 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            taskList:[
                {
                    title: 'film ionic',
                    checked: true
                },
                {
                    title: 'film node',
                    checked: false
                },
                {
                    title: 'film egg',
                    checked: true
                },
                {
                    title: 'film react',
                    checked: false
                },
                {
                    title: 'film vue',
                    checked: false
                },
            ]
        };
    }

    //加载页面触发方法
    componentDidMount() {
        //获取缓存数据
        // let list = JSON.parse(localStorage.getItem('todoList'));
        let list = Storage.get('todoList');
        if (list){
            this.setState({
                taskList:list
            })
        }
    }


    handleAdd=()=>{
        let tempList = this.state.taskList;
        tempList.push({
            title:this.refs.title.value,
            checked:false
        });
        this.setState({
            taskList : tempList
        });
        this.refs.title.value = null;
        // localStorage.setItem('todoList',JSON.stringify(tempList));//缓存
        Storage.set('todoList',tempList);
    }

    handleDel=(key)=>{
        let tempList = this.state.taskList;
        tempList.splice(key,1);
        this.setState({
            taskList : tempList
        })
        // localStorage.setItem('todoList',JSON.stringify(tempList));
        Storage.set('todoList',tempList);
    }

    handleChecked=(key)=>{
        let tempList = this.state.taskList;
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            taskList : tempList
        })
        // localStorage.setItem('todoList',JSON.stringify(tempList));
        Storage.set('todoList',tempList);
    }


    render() {
        return (
            <div>
                <h2>React TodoList Example2</h2>
                <input ref="title"/>
                <button onClick={this.handleAdd}>新增</button>
                <hr/>

                <h2>processing</h2>
                <ul>
                    {this.state.taskList.map((value,key)=>{
                        if (!value.checked){
                            return (
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.handleChecked.bind(this,key)}/>
                                    {value.title}
                                    <button onClick={this.handleDel.bind(this,key)}>删除</button>
                                </li>
                            );
                        }
                    })}
                </ul>

                <hr/>

                <h2>completed</h2>
                <ul>
                    {this.state.taskList.map((value,key)=>{
                        if (value.checked){
                            return (
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.handleChecked.bind(this,key)}/>
                                    {value.title}
                                    <button onClick={this.handleDel.bind(this,key)}>删除</button>
                                </li>
                            );
                        }
                    })}
                </ul>

            </div>
        );
    }
}
export default Todolist2;