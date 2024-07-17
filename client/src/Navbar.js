import {useThemeContext} from "./contexts/ThemeContext"

export default function Navbar() {

const { theme,toggleTheme}= useThemeContext();

return (
    <div>my theme is {theme}
    <br/>
    
    <button onClick={toggleTheme}>Toogletheme</button>
    </div>
  )
}

 