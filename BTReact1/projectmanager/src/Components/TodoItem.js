import React, { Component } from 'react';

class TodoItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id)
  }


  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}


TodoItem.proTypes = {
  todo: React.PropTypes.object,
}

export default TodoItem;
