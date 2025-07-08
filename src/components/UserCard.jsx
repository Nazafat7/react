import React,{useState} from 'react'

function UserCard (){
   const [darkMode,setDarkMode] = useState(false);
   const toggletheme = ()=> setDarkMode(!darkMode);
   return <div style={{backgroundColor:darkMode?"#333":"#f4f4f4",color:darkMode?"#fff":"#000",
      padding:"1rem",botderRadius:"0.5rem"
   }}>
      <button onClick={toggletheme}>
         Switch Mode: {darkMode?'Light':'Dark'} Mode
      </button>
   </div>
}

export default UserCard;