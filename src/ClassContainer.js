import React from "react";
import AddList from "./AddList";
import InputAdd from "./InputAdd";
import { v4 as uuidv4 } from "uuid";
import SelectItem from './SelectItem';

class ClassContainer extends React.Component {
    state = {
        adds: [
          {
            id: uuidv4(),
            title: "CNIT 103 - Hardware - 3 units",
            completed: false
          },
          {
            id: uuidv4(),
            title: "CNIT 131 – Internet & Intro to HTML, CSS – 3 units",
            completed: false
          },
          {
            id: uuidv4(),
            title: "CNIT 106 – Introduction to Networks – 3 units",
            completed: false
          },
          {
            id: uuidv4(),
            title: "CNIT 120 – Network Security – 3 units",
            completed: false
          }
        ]
       };

  handleChange = (id) => {
      this.setState({
          adds: this.state.adds.map(add => {
              if (add.id === id) {
                  add.completed = !add.completed;
              }
              return add;
          })
      });
  };

  deleteAdd = id => {
      this.setState({
          adds: [
              ...this.state.adds.filter(add => {
                  return add.id !== id;
              })
          ]
      });
  };

  addAddItem = title => {
    const newAdd = {
        id: uuidv4(),
        title: title,
        completed: false
    };
    this.setState({
        adds: [...this.state.adds, newAdd]
    });
  };

  render() {
    return (
      <div className="container">
          <SelectItem addSelectProps={this.addAddItem} />
          <br></br>
          <InputAdd addAddProps={this.addAddItem} />
          <AddList adds={this.state.adds} handleChangeProps={this.handleChange} deleteAddProps={this.deleteAdd} />
      </div>
    )
  }
}
export default ClassContainer