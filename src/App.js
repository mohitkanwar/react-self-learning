import React,{Component} from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'
import './App.css';
class App extends Component {
  state = {
    paragraph:''
  }
  render = ()=> {
    return (
      <div className="App">
        <input type="text" name="paragraph" onChange={this.inputChangeListner} value={this.state.paragraph}/>
        <p >The input length is {this.state.paragraph.length}</p>
        <ValidationComponent inputlength = {this.state.paragraph.length} />
        {
          this.state.paragraph.split('').map((c,index)=><CharComponent 
            char={c} 
            key = {index}
            click={this.deleteChar.bind(this,{index})}/>)
        }
      </div>
    );
  }
  deleteChar = (event)=>{
    const text = this.state.paragraph.split('');
    text.splice(event.index,1);
    this.setState({paragraph:text.join('')})
  }
  inputChangeListner = (event) =>{
    this.setState({paragraph:event.target.value})
  }
}
export default App;
