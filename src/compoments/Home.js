import React from 'react'
import Header from "./Header";

class Home extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            msg:'home component context',
            title:'HOME',
            dead:'your time has come'
        };
    }

    run=()=>{
        alert("I am your father !");
    }

    getData=()=>{
        alert(this.state.msg);
    }

    render() {
        return(
            <div>
                {/*属性 方法 整个组件*/}
                <Header title={this.state.title} run={this.run} home={this}/>
                <hr/>
                <Header dead={this.state.dead} run={this.run} home={this} num={'aaaaaaaaaa'}/>
                {this.state.msg}
            </div>
        );
    }

}

export default Home;