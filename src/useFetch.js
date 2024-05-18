import { useState , useEffect } from 'react';
const useFetch=(url)=>{
    //from blogs to data because cause u can make it reusable
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [isError,setError]=useState(null);
    // setlblogs is needed do better to better in home and pass it as a prop
    //original values arent replaced
    useEffect(()=>{
        const abortCont=new AbortController();
        setTimeout(()=>{
            fetch(url,{ signal: abortCont.signal })
        .then(res=>{
            if(!res.ok){
                throw Error("could not fetch data for that resource");
            }
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err=>{
            if(err.name==="AbortError"){
                console.log("fetch aborted");
            }
            else{
                setIsPending(false);
                setError(err.message);
            }
        });
        },1000);

        return ()=>abortCont.abort();
    },[url]);
    return {data,isPending,isError};
}

export default useFetch;