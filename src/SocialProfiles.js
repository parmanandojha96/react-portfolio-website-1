import React,{ Component } from 'react';
import SOCIAL_PROFILE from './data/socialProfiles';


class SocialProfile extends Component{


    render(){
        const { link, image} = this.props.social;

        return(
            <div style={{ display: "inline-block", width: 80, margin: 10}}>
                <a href={link}><img src={image} alt='Social Profile' style={{width: 50}}></img></a>
            </div>
        );
    }


}


class SocailProfiles extends Component{
    render(){
        return(
            <div>
                <h4>CONNECT WITH US</h4>
                <div>
                    {
                        SOCIAL_PROFILE.map(SOCIAL =>{
                            return( <SocialProfile key={SOCIAL.id} social ={SOCIAL}/>);
                        }
                            )
                    }
                </div>
            </div>
        );
    }
}

export default SocailProfiles;