import React, { Component } from 'react';

const TITLES =[
    'a software developer',
    'a photographer',
    'a designer'
];

class Title extends Component{
    state ={titleIndex: 0};

    componentDidMount(){

      this.animateTitle();

    }

    animateTitle=()=>{ setInterval(()=>{ 
          const titleIndex = (this.state.titleIndex +1)% TITLES.length;

          this.setState({titleIndex});
    },4000);}

    render(){
       const title =TITLES[this.state.titleIndex];
       
       return(
       <p>I am {title}</p>
       );
    }
}

export default Title;