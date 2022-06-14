import React from "react";
import Person from "./Component/Person";

class App extends React.Component{
constructor(){
    super()
    this.state={
      isShow: true,
      
    }
}

render(){

    return(
        <div style={{textAlign:"center"}}> 
        
        <button onClick={()=> this.setState({isShow:!this.state.isShow})}>
          {this.state.isShow?"Hide":"show"}
        </button>
        {
          this.state.isShow && <Person />
        }
          
        </div>
    )
}


}

export default App;