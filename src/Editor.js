import React, { Component } from 'react'
import Previewer from './Previewer';

class Editor extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const readmePath = require("./Initialmarkdown.md");
      
        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              value: text
            })
          })
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

    render() {
        return (
            <div>
             <h3 className=" editor-label">Editor</h3>
             <textarea id="editor" name="editor" rows="10" cols="70" value={this.state.value} onChange={this.handleChange}/>
             <Previewer markdown= {this.state.value}/>
            </div> 
        )
    }
}

export default Editor
