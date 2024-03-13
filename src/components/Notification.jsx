import React from "react";
// import { Icon } from 'astro-icon/components'



const Notification = (props) => {
    const {message,icon} = props
  return( 
<div style={{display:'flex',width:'100%',backgroundColor:'#feffa8',color:'#242424',margin:'20px',padding:'10px',fontWeight:'500'}}>
          {/* <Icon name="mdi:home" /> */}
          <iconify-icon icon={icon.name} style={{fontSize:'1.5em',marginRight:'10px',color:icon.color}} observer="false"> </iconify-icon> {message}     

        </div>

  );
};

export default Notification;
