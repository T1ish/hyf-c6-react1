import React from 'react';
import Todo from './Todo.js';
import PropTypes from 'prop-types';

class TodoList extends React.Component{

    render(){
        const list = this.props.list;
        return(
            <div>
                <ul>
                    {list.map(item => {
                        return <Todo todoItem = {item} />
                    })}
                </ul>
                
            </div>
        );
    }
}

TodoList.defaultProps = {
    list: [ 
        {
            "todo": 
            { 
                "description": "No todo", 
                "deadline": "No time"
            }
        }
    ]
  };

TodoList.propTypes = {
    //listOfTodos: PropTypes.array.isRequired
    list: PropTypes.bool.isRequired
  };

export default TodoList;