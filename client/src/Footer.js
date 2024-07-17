import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default function Footer() {
    const{theme,setTheme} =useContext(ThemeContext)
  return (
    <div>Footer theme is {theme}</div>
  )
}




  
 
    

 