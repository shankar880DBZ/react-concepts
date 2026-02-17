import React, { useEffect, useState } from 'react'


const LocalStorage_part_3 = () => {
    const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light",
    );

    useEffect(()=>{
        localStorage.setItem("theme", theme);
       document.body.style.background = theme === "dark" ? "black" : "white";
    },[theme]);
    
    
    
  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> 
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default LocalStorage_part_3