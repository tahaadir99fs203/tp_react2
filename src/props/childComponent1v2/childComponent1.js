import React, { Component } from "react";

class ChildComponent1 extends Component {
  constructor(props)
  {
    super(props)
 
  }
  render() {
    return(
     <div>
     Valeur From parent: {this.props.valeurInput}
    </div>
    );
  }
}

export default ChildComponent1;