import React, {Component} from 'react';
import MyContext from './Context';

export default class Name  extends Component {
    render() {
        return (
            <div className="name">
                Меня зовут {this.context.name}, возраст {this.context.age} лет.
            </div>
        );
    }
}

Name.contextType = MyContext;
