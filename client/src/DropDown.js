  import {useState} from "react";
  
  
  const countries = [
    {
        name:"Nepal",
        value:"NP",
        cities:["kathmandu","Bhaktapur","lalitpur"]
    },
    {
        name:"India",
        value:"IN",
        cities:["Banglore","New Dheli","Mumbai"]
    },
    {
        name:"Pakistan",
        value:"PK",
        cities:["Karachi","Lahore","Islambad"]
    }
  ];

  export  default function DropDown(){
    const [country,setCountry]= useState("");

    return(
      <>
      
      <select onChange ={(e)=>{
        setCountry(e.target.value)
      }}>

         <option value="">Select a country</option>
          {countries.map((country,index)=>{
           return(
            <option key={index} value={country.value}>
             {country?.name} 
            </option>
           )

          })}

      </select>

      { country && (
       <> <select
       onChange={(e)=>{
        console.log(e.target.value)
       }}
       
       >
          <option value="">Select a city</option>
          {
            countries.find((d)=>d.value === country
            )?.cities.map((city,index)=>{
              return(
                <option key={index} value={city}>
                  {city}
                </option>
              )
            })
          }
        </select>
        </>
      )
      }
      
      
      </>
    )

  }


 