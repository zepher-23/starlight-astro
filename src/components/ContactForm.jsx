import React,{useState} from "react";
import '../global.css'
import Notification from './Notification.jsx'

const ContactForm = () => {
    const [data,setData] = useState({name:"",email:"",message:""});
    const [notData,setNotData] = useState({flag:false,message:''})
    const [icon,setIcon] = useState({})

const handleChange=(e)=>{
    const {name,value} = e.target
    
    setData({...data,[name]:value})
    // setData(data.form = e.taget.value)
}



const hideMessage = () => {
    setTimeout(() => {
      setNotData(prevState => ({ ...prevState, flag: false }));
    }, 3000); // 2000 milliseconds = 2 seconds
  };


    const  validate=async ()=>{
        if(!data.name || !data.email || !data.message){
            setNotData(prev=>({...prev,flag:true, message:'Please fill out all fields'}))
            setIcon({name:"ic:round-sim-card-alert",color:'red'})
            hideMessage()
            return
        }
        
   fetch(`${import.meta.env.SITE}/.netlify/functions/sendMail`, {
            method: "POST",
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              message:data.message,
              sender: "contact@starlightcinematics.com"
            })
          }).then(response=>response.text()).then(response=>{


            setNotData({flag:true,message:response})
            setIcon({name:"ic:baseline-check-circle",color: 'green'})
            hideMessage()
             
             
             
          })

          
    

    }
  return (<>

 
  <main className="mainForm"  >
    <div  style={{display:'flex',flexDirection:'column'}} >
  <label htmlFor="name">Name</label>
  <input id="name" type="text" name="name" onChange={(e)=>{handleChange(e)}}  placeholder="Your Name" value={data.name} required/><br/>
  <label htmlFor="email">Email Address*</label>
  <input id="email" type="text" name="email" onChange={(e)=>{handleChange(e)}} value={data.email} placeholder="Email Address" required/><br/>
  
  {/* <label htmlFor="message">Message</label> */}
  <textarea id="message" rows="4" style={{height:'100px',resize:'none'}} name="message" onChange={(e)=>{handleChange(e)}} value={data.message} placeholder="Message" required />
 <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
  <button type="submit" style={{padding:'10px',margin:'20px'}} onClick={validate}>Send</button>
</div>
</div>
<div className="notification">
{notData.flag?<Notification message={notData.message} icon={icon} />: null }
</div>
</main>
  </>);
};

export default ContactForm;
