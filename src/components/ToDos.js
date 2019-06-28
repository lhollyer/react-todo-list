import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((item) => (
      <ToDoItem key={item.id} todo={item} delTodo={this.props.delTodo} markComplete={this.props.markComplete} />
    ));
  }
}

// proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
