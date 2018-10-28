import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    render(){
        const item = this.props.todoItem;
        return ( 
        <div>
            <li>
                {item.todo.deadline } -:- {item.todo.description}
            </li>
            
        </div>
        );
    }
}

Todo.propTypes = {
    item: PropTypes.bool.isRequired,
    deadline: PropTypes.bool.isRequired,
    description: PropTypes.bool.isRequired
};

export default Todo;