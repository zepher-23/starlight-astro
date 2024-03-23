import React from "react";
// import { Icon } from 'astro-icon/components'



const Notification = (props) => {
    const {message,icon} = props
  return( 
<div style={{display:'flex',width:'100%',backgroundColor:'#76ABAE',color:'#EEEEEE',margin:'20px',padding:'10px',fontWeight:'500', boxShadow: " rgba(31, 29, 29, 0.8) 0px 2px 5px -1px, rgba(0, 0, 0, 0.5) 0px 1px 3px -1px"}}>
          {/* <Icon name="mdi:home" /> */}
          <iconify-icon icon={icon.name} style={{fontSize:'1.5em',marginRight:'10px',color:icon.color}} observer="false"> </iconify-icon> {message}     

        </div>

  );
};

export default Notification;
