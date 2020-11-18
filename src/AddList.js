import React from "react";
import AddItem from "./AddItem";


class AddList extends React.Component {

  render() {
    return (
      <div>
          {this.props.adds.map(add => (
              <AddItem key={add.id} add={add} handleChangeProps={this.props.handleChangeProps} deleteAddProps={this.props.deleteAddProps} />
          ))}

      </div>
    )
  }
}
export default AddList