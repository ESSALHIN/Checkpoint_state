import React from "react";

class Person extends React.Component{
constructor(){
    super()
    this.state={
        fullName : "Nadia ESSALHI",
        bio : "PhD_Engineer in Chemical & Process Engineering",
        profession : "Project Manager",
        imgSrc : "Photo_Nadia_ESSALHI.jpg",
        timer:0,

    }

}
componentDidMount(){
this.timerId=setInterval(()=>{this.setState({timer:this.state.timer+1})},1000)
}
componentDidUpdate(){
    console.log("Updating");

}
componentWillUnmount(){
    clearInterval(this.timerId);

}
render(){

    return(
        <div> 
            <p>{this.state.timer}</p>
            <h1>Checkpoint State</h1>
<p>{this.state.fullName}</p>
<p>{this.state.bio}</p>
<p>{this.state.profession}</p>
<img src={this.state.imgSrc} alt="imgSrc" width="30%" />
        </div>
    )
}


}

export default Person;