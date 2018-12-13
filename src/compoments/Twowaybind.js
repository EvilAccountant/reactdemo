import React from 'react'

class Twowaybind extends React.Component{

    constructor(props){
        super(props);

        this.state={
            logo : 'looooooogoooooo'
        }
    }

    inputChange=(event)=>{
        let val = event.target.value

        this.setState({
            logo: val
        })
    }

    render() {
        return (
            <div>
                <h2>双向数据绑定</h2>
                {/*model影响view view影响model*/}
                <p>{this.state.logo}</p>

                <input value={this.state.logo} onChange={this.inputChange}/>

            </div>
        );
    }
}

export default Twowaybind;