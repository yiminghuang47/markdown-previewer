import React, { Component } from "react";
import "./App.scss";
import ReactDOM from 'react-dom';
import Markdown from 'marked-react';


const init_input = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function add(a, b) {
  return a+b;
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input: init_input
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header" >
          <h1>Markdown Previewer</h1>
          <Input handleChange={this.handleChange}input={this.state.input} />
          <Preview input={this.state.input}/>
        </header>
      </div>
    );
  }
}

class Input extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <textarea id="editor" style={{height:"20vh",width:"50vw",margin:"20px",background:"#aac0e0",border:"none",borderRadius:"10px",boxShadow:"0px 0px 20px"}}onChange={this.props.handleChange}>{this.props.input}</textarea>
    );
  }
}

class Preview extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="preview" style={{color:"black",backgroundColor:"#aac0e0",width:"70vw",overflow:"auto",textAlign:"left",margin:"20px",borderRadius:"10px",boxShadow:"0px 0px 20px"}}>
        <div style={{padding:"30px"}}>
          <Markdown>{this.props.input}</Markdown>
        </div>
      </div>
      
    );
  }
}


export default App;
