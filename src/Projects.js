import React,{ Component } from 'react';
import PROJECTS from './data/project';

class Project extends Component{
 render(){
     const { title, image, description } = this.props.project;

     return(
       <div style={{display: "inline-block", width: 300, margin: 10}}>
           <h3>{title}</h3>
           <img src={image} alt="Project" style={{ width:200, height: 120}}></img>
           <p>{ description}</p>
       </div>
     );
 }
}

 class Projects extends Component{
     render(){
         return(
             <div>
                 <h2>Highlighted Portfolio</h2>
                 <div>
                     {
                         PROJECTS.map(PROJECT =>{
                             return(
                                 <Project key={PROJECT.id} project={PROJECT}></Project>
                             );
                         })
                     }
                 </div>
             </div>
         );
     }
 }

 export default Projects;