import React from 'react'

class Method extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            msg:'let the battle begin',
            title:'Deja Vu'
        }

        this.sento2 = this.sento2.bind(this)
    }

    sento1(){
        alert(this.state.msg)
    }

    sento2(){
        alert(this.state.msg)
    }

    sento3=()=>{
        alert(this.state.msg)
    }

    changeSento=()=>{
        this.setState({
            msg:'the battle is over'
        })
    }

    changeTitle=(str)=>{
        this.setState({
            title: str
        })
    }


    render() {
        return(
            <div>
                {this.state.title}
                <button onClick={this.sento1.bind(this)}>宣告1</button>
                <button onClick={this.sento2}>宣告2</button>
                <button onClick={this.sento3}>宣告3</button>
                <button onClick={this.changeSento}>宣告变更</button>
                <button onClick={this.changeTitle.bind(this,'逮虾户')}>Title变更</button>
            </div>
        )
    }


}

export default Method;