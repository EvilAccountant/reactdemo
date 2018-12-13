import React from 'react'

class Todolist extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            taskList:[],
        };
    }


    handleAdd=()=>{
        let tempList = this.state.taskList;
        tempList.push(this.refs.title.value);
        this.refs.title.value = null;
        this.setState({
            taskList : tempList
        });
    }

    handleDel=(key)=>{
        let tempList = this.state.taskList;
        tempList.splice(key,1);
        this.setState({
            taskList : tempList
        })
    }

    render() {
        return (
            <div>
                <h2>React TodoList Example</h2>
                <input ref="title"/>
                <button onClick={this.handleAdd}>新增</button>
                <hr/>

                <ul>
                    {this.state.taskList.map((value,key)=>{
                        return(
                            <li key={key}>
                                {value}
                                <button onClick={this.handleDel.bind(this,key)}>删除</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
export default Todolist;