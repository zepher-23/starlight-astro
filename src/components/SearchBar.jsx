import React,{useRef} from "react";
import '../global.css'

const SearchBar = (props) => {
    const searchRef = useRef(null)
    const resultRef = useRef(null)
    console.log(searchRef)
    const data = props.data
    

    const search =() =>{
        // console.log("clicked")
        let value = searchRef.current.value 

    }

    const display =()=>{
        if(resultRef.current.style.display === 'flex'){
            resultRef.current.style.display = 'none'
        }else{
            resultRef.current.style.display = 'flex'
        }


    }
    
   

  return(
    <>
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', position: 'relative',margin:'20px' }}>
                <input type="text" placeholder="Search" onBlur={display} onFocus={display} ref={searchRef} name="search" className="search" />
                <button style={{ cursor: 'pointer' }} onClick={search}>Search</button>
                <div className="searchResults" ref={resultRef} style={{display:'none', backgroundColor: 'white',width:'100%',maxWidth:'100%', height: '300px', position: 'absolute', top: '110%',left:0 ,zIndex:999,borderRadius:'10px'}}>
                    <div style={{padding:'20px'}}>

                    </div>
                </div>
            </div>
            </>

  );
};

export default SearchBar;
