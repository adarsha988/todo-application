import {useEffect,useState} from 'react'
import Loading from './Components/Loading';
import {useFetchApi} from "./hooks/useFetchApi"

function Demo() {
 const {loading,
  error,
  data: posts,
 }= useFetchApi(
  {
    url: "https://jsonplaceholder.typicode.com/posts",
} )


if(loading)
  return(
<>
<Loading/>
</>


  )
  if(error) return <> {JSON.stringify(error)}</>


 
  return (
    <>
   

    <table>
      <thead>
  <tr>
    <th>userId</th>
    <th>Id</th>
    <th>Title</th>
  </tr>
  </thead>
  <tbody>
    {posts && posts.length > 0 &&
    posts.map ((post,index)=>{

      return(
        <tr
        key={index}>
        <td>{post?.userId}</td>
        <td>{post?.id}</td>
        <td>{post?.title}</td>
      </tr>
      )
    })}

  </tbody>
  
</table>
    
    </>
  )
}

export default Demo