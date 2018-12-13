import React from 'react'

class Servant extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            SERVANTS : ['SABER','LANCER','ARCHER','RIDER','CASTER','ASSASSIN','BERSERKER'],

            servants : [
                <li key='1'>saber</li>,
                <li key='2'>lancer</li>,
                <li key='3'>archer</li>,
                <li key='4'>rider</li>,
                <li key='5'>caster</li>,
                <li key='6'>assassin</li>,
                <li key='7'>berserker</li>
            ],

        }
    }

    render() {

        return (
            <div>
                <ul>
                    {this.state.servants}
                </ul>

                <ul>
                    {
                        this.state.SERVANTS.map(function (value, key) {
                            return (<li key={key}>{value}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default Servant;