import React from 'react';

  import ChildComponent1 from './props/childComponent1v2';
  class  App extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={
        input:''
      }
    }
   
    changeValue=(e)=>{
    this.setState({
      input:e.target.value
    })
    }
    render()
    {
      return (
        <div>
          <input type="text" onChange={this.changeValue} />
         <ChildComponent1  valeurInput={this.state.input}   />
        </div>

        );
       
      }
   
    }
    export default App;