import React, { Component } from 'react';
import Projects from './Projects';
import SocailProfiles from './SocialProfiles';
import Title from './Title';
import Header from './Header';


class App extends Component {
constructor(){
    super();
    this.state={dislayBio : false}

   // this.readMore = this.readMore.bind(this);
   // this.showLess = this.showLess.bind(this);
   this.toggleDisplay = this.toggleDisplay.bind(this);
}

//readMore(){ this.setState({ dislayBio : true}); }
//showLess(){ this.setState({ dislayBio : false}); }

toggleDisplay = () =>{
    this.setState({ dislayBio : !this.state.dislayBio })
}
  
  render(){
       let bio = (
                       <div><h1>Surprise</h1>
                        <button onClick={this.toggleDisplay}>Show Less</button>
                        </div> );

            if(!this.state.dislayBio){
                bio=( <div>
                    <button onClick={this.toggleDisplay}>Read More</button> </div>   );
            }
       return(
           <div>
               <Header/>
               <h1>hello</h1>
               <p>My name is Parmanand Ojha</p>
               <Title/>
               {bio}
               <hr />
               <Projects />
               <SocailProfiles />
              
           </div>
       )
   }   
}

export default App;
