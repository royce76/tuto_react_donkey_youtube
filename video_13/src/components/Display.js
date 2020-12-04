import React from 'react';
import Users from './Singers';

class Display extends React.Component {

    render () {
        return (
            <div>
                <h1>Musiciens</h1>
                <Users name="Eric Clapton" age="74"></Users>
                <Users name="Jimmy" age="27"></Users>
                <Users name="David" age="73"></Users>
                <Users name="carlos" age="64"></Users>
            </div>
        );
    }
}

export default Display;