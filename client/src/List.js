import React from 'react'

function List({cars}) {
  return (
    <div>
        <b>List
        </b>
        <ol>
{ 
    cars && cars.length > 0 && 
    cars.map((car,i) =>{
      return  <li key={i}>{car}</li>
    })
}
</ol>

    </div>
  )
}

export default List