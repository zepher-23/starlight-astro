import React,{useEffect} from "react";
import '../global.css'

const SearchBar = () => {
   

  return(
    <div style={{width:'100vw',display:'flex',justifyContent:'center', padding:'20px'}}>
    <input type="text" placeholder="Search" name="search" className="search" />
    <button style={{cursor:'pointer'}}>button</button>
    
    </div>

  );
};

export default SearchBar;
