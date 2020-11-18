import React from "react";
import { FaTrashAlt } from 'react-icons/fa';


class AddItem extends React.Component {
  render() {

    return <li className="add-item">
        {/* <input type="checkbox" checked={this.props.add.completed} onChange={() => this.props.handleChangeProps(this.props.add.id)} /> */}
        <button onClick={() => this.props.deleteAddProps(this.props.add.id)}><FaTrashAlt /></button>
        <span>{this.props.add.title}</span>
    </li>
  }
}

export default AddItem