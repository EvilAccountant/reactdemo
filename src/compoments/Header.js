import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            msg:'this is an head component',
        };
    }

    getSome=()=>{
        this.props.home.getData();
    }

    getMsg=()=>{
        alert(this.props.home.state.msg)
    }

    render() {
        return(
            <div>
                {this.props.title}
                <hr/>
                <button onClick={this.props.run}>use father method</button>
                <hr/>
                <button onClick={this.getMsg}>use father</button>
                <hr/>
                <button onClick={this.getSome}>use fatherMethod</button>
                <hr/>
                {this.props.dead}
                {this.props.num}
            </div>
        );
    }

}

Header.defaultProps={
    dead:'the time is up'
}

Header.propTypes={
    num:PropTypes.number
}

export default Header;