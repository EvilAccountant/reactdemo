import React from 'react';
import Axios from 'axios';

class AxiosTest extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            list: []
        };
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
        return(
            <div>
                <h2>Axios获取服务器数据</h2>
                <button onClick={this.getData}>获取服务器API接口数据</button>
                <hr/>
                {this.state.list.map((value,key)=>{
                    return <p key={key}>{value.title}</p>
                })}
            </div>
        );
    }

}

export default AxiosTest;