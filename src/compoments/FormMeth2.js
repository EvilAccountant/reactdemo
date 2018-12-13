import React from 'react'

class FormMeth2 extends React.Component{

    constructor(props){
        super(props);

        this.state={
            inputValue : ''
        }
    }

    inputChange=()=>{
        let value = this.refs.dead.value;

        this.setState({
            inputValue: value
        })
    }

    getInputValue=()=>{
        alert(this.state.inputValue)
    }

    inputKeyUp=(event)=>{
        let kval = event.keyCode;
        console.log(kval)
        if (kval===13){//为回车键
            alert(event.target.value);
        }
    }

    render() {
        return (
            <div>
                {this.state.inputValue}
                <input ref="dead" onChange={this.inputChange}/>
                <button onClick={this.getInputValue}>获取input值</button>
                <hr/>
                <input onKeyUp={this.inputKeyUp}/>
            </div>
        );
    }
}

export default FormMeth2;