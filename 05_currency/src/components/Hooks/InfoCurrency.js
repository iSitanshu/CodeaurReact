import { useEffect, useState } from "react";

function InfoCurreny(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
          .then((res) => {res.json()})
          .then((res)=>setData(res[currency]))
    },[currency])
    return data;
}
export default InfoCurreny;


// Custom Hooks Notes
// 1. Customise Hooks can use the default Hooks 
// 2. function Name(){
//     return data;
// } export default Name;
// 3. parameters which can be used to call the API
// 4. API Calling
// 5. useEffect(()=>{
//         fetch(`url`)
//         .then((res)=> res.json()) value convert
//         .then((res)=>setData(res)) value store
//     },[dependency])

// You know how to design custom Hooks