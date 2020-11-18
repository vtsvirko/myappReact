
import React, { Component } from 'react'
import Select from 'react-select'
import data from './data.json'

class SelectItem extends Component {
 

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      code: "",
      title: "",
      unit: ""
    }
  }
  state = {
    title: ""
};
 async getOptions(){

    const options = data.map(d => ({
      "value" : d.code,
      "value" : d.title,
      "value" : d.unit,
      "label" : d.code + " - " + d.title + " - " + d.unit + " units"

    }))

    this.setState({selectOptions: options})

  }

  handleChange(e){
   this.setState({code:e.value, code:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSelectProps(this.state.code);
    this.setState({
        title: ""
    })
 } 

  render() {
    console.log(this.state.selectOptions)
    return (
 
    <form onSubmit={this.handleSubmit} className="f-container">
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} className="s-input" />
        
        <input type="submit" value="SELECT" className="f-submit" />
    </form>
    )
   
  }
}

export default SelectItem