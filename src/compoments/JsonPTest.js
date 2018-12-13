import React from 'react';
import FetchJsonp from 'fetch-jsonp';

class JsonPTest extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            list: []
        };
    }

    getData=()=>{
        //callback判断是否支持jsonp
        FetchJsonp('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&callback=xxx')
            .then(function(response) {
                return response.json();
            })
            .then((json)=> {
                console.log('parsed json', json);
                this.setState({
                    list: json.result
                })
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
            })
    }

    render() {
        return(
            <div>
                <h2>FetchJsonp获取服务器jsonp数据</h2>
                <button onClick={this.getData}>获取服务器API接口数据</button>
                <hr/>
                {this.state.list.map((value,key)=>{
                    return <p key={key}>{value.title}</p>
                })}
            </div>
        );
    }

}

export default JsonPTest;