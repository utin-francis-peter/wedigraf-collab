import React from "react";

const SingleTodo = ({ todo, handleEditTodo, handleDeleteTodo }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Todo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SingleTodo;
