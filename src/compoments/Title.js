import React from 'react';
import '../assets/css/myStyle.css'

class Title extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            warning:'this is an servant',

            title: '聖杯戰爭',
        }
    }

    render() {
        return (
            <div>
                <h4 title={this.state.warning}>show your title</h4>
                <h4 className='myColor'>show white</h4>

                <ul>
                    <li>{this.state.title}</li>
                </ul>
            </div>
        );
    }

}

export default Title;