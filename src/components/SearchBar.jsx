import React from "react";
import '../global.css'

const SearchBar = () => {

  return(
    <div style={{width:'100vw',display:'flex',justifyContent:'center', padding:'20px'}}>
    <input type="text" placeholder="Search" style={{width:"100%",height:'40px'}}/>
    <button style={{width:'100px',cursor:'pointer'}}>Submit</button>
    </div>
  );
};

export default SearchBar;
