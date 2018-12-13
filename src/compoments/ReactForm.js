import React from 'react'

class ReactForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            msg:'react form',

            name:'',
            sex:'1',
            city:'Beijing',
            cities:['Beijing','Shanghai','Shenzhen'],
            hobby:[
                {'title':'sleep','checked':true},
                {'title':'play','checked':true},
                {'title':'eat','checked':false},
            ],
            info:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        console.log(this.state.name);
        console.log(this.state.sex);
        console.log(this.state.city);
        console.log(this.state.hobby);
        console.log(this.state.info);
    }

    handleName=(e)=>{
        this.setState({
            name : e.target.value
        })
    }

    handleSex=(e)=>{
        this.setState({
            sex : e.target.value
        })
    }

    handleCity=(e)=>{
        this.setState({
            city : e.target.value
        })
    }

    handleHobby=(key)=>{
        let hobby = this.state.hobby;

        hobby[key].checked=!hobby[key].checked;

        this.setState({
            hobby : hobby
        })
    }

    handleInfo=(e)=>{
        this.setState({
            info : e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <form onSubmit={this.handleSubmit}>
                    name : <input type="text" value={this.state.name} onChange={this.handleName}/>
                    <hr/>

                    sex :
                    male  <input type="radio" value="1" checked={this.state.sex==1} onChange={this.handleSex}/>
                    female<input type="radio" value="2" checked={this.state.sex==2} onChange={this.handleSex}/>
                    <hr/>

                    city :
                    <select value={this.state.city} onChange={this.handleCity}>
                        {this.state.cities.map(function (value, key) {
                            return (<option key={key}>{value}</option>)
                        })}
                    </select>
                    <hr/>

                    hobby:
                    {this.state.hobby.map((value, key)=>{
                        return (
                            <span key={key}>
                                {value.title} <input type="checkbox"  checked={value.checked} onChange={this.handleHobby.bind(this,key)}/>
                            </span>
                        );
                    })}
                    <hr/>

                    info:
                    <textarea value={this.state.info} onChange={this.handleInfo}/>
                    <hr/>

                    <input type="submit" defaultValue="提交"/>
                </form>
            </div>
        );
    }
}

export default ReactForm;