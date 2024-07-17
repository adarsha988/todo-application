import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
 import { useState } from 'react';
import countries from '../DropDown';

function Dropdownbutton() {
  const [showSplitButton, setShowSplitButton] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [title,setTitle] = useState("select a country....")
  const handleClick=(countryName)=>{
    
    setSelectedCountry(countryName);
 setShowSplitButton(true);
  }
  const handlerClick=(city)=>{
    setTitle(city)
  }
  return (
    <>
    <div >
        
          <DropdownButton
            as={ButtonGroup}
             size="sm"
            variant="secondary"
            title={selectedCountry===null ? "select a country" :selectedCountry.name }
          >
            {countries?.map((country, idx) => (
            <Dropdown.Item  
            key={idx}
            eventKey={idx}
            onClick={()=>{  handleClick(country);}}>
              {country?.name}</Dropdown.Item>
            
        ))}  
        </DropdownButton>
      </div>
      <div>
        {showSplitButton && selectedCountry &&
        ( 
          <SplitButton
            as={ButtonGroup}
            size="sm"
            variant="secondary"
            title={title}
          >
            {console.log(selectedCountry.cities)}
              {selectedCountry.cities?.map((city,id)=>{
                
                return (
            <Dropdown.Item 
            key={id} 
            eventKey={id} onClick={()=>handlerClick(city)}>{city}</Dropdown.Item>
              )}
)}
          </SplitButton>
        )}
      </div>
    </>
  )
}
export default Dropdownbutton;
