import React from 'react'

class FormMeth extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            inputValue:''
        }
    }

    run=(event)=>{
        alert(event.target);
        event.target.style.background = 'red';
        alert(event.target.getAttribute('aid'));
    }

    inputChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            inputValue : event.target.value
        })
    }

    showInput=()=>{
        alert(this.state.inputValue)
    }

    render() {
        return (
            <div>
                <button aid="Alex" onClick={this.run}>事件对象</button>
                <hr/>
                <h3>表单事件</h3>
                {this.state.inputValue}
                <input onChange={this.inputChange}/>
                <button onClick={this.showInput}>get input value</button>
            </div>
        )
    }
}

export default FormMeth;