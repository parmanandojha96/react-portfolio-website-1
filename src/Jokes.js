import React,{Component} from 'react';
import Header from './Header';

class Jokes extends Component{

     state = {joke : {}, jokes:[] };

     componentDidMount(){
         fetch('https://official-joke-api.appspot.com/random_joke')
         .then(response=> response.json())
         .then(json=> this.setState({joke: json}));
     }

     fetchJokes= () =>{
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response=> response.json())
        .then(json=> this.setState({jokes: json}));
     }
  
     render(){
         const { setup, punchline} =this.state.joke;
         return(
             <div>
                 <Header/>
                 <p>
         {setup} <em>{punchline}</em>
                 </p>

                 <h3>
                     Want More of them ?
                 </h3>
                 <button onClick={this.fetchJokes}>Click Me</button>
                 {
                     this.state.jokes.map(joke=>{
                         const {id, setup, punchline} = joke;

                         return <p key={id}> {setup} <em>{punchline}</em></p>
                     })
                 }
             </div>
         );
     }
}

export default Jokes;