import {useState,useEffect}from 'react'


function useFetchApi() {
    var url;
    const [posts,setPosts]=useState([]);
const [error,setError]=useState(null);
const [loading,setLoading]= useState(false);

useEffect(()=>{
let isMounted = false;

const fetchData =(isMounted)=>{
  setLoading(true)
  isMounted = true;
 fetch(url)
 .then((res) =>{
  return res.json();
 })
 .then(data=> setPosts(data))
 .catch((e)=>{
  setError(e);
 })
 .finally(()=>{
isMounted=false;
setLoading(false);
 });
}
fetchData({isMounted,url});
return (isMounted)=>{
    isMounted=false;
};

},[url]);
  return {posts,loading,error}
}

export default useFetchApi;