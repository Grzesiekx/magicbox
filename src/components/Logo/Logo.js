import React  from 'react';
import crystal from './crystal-ball.png';

const Logo = () =>{
    return(
        <div className ='ma5 mt0'>
            <img alt = 'logo' src={crystal} width='80' height='80'/>
        </div>
    );
}
export default Logo;