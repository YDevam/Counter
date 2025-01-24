import { useState } from "react"

const Count =()=>{
    let[count,SetCount]=useState(0)
    function inc(){
        SetCount(++count)
    }
    const dec =()=>{
        if(count>0){
            SetCount(count-1)
        }else{
            SetCount(count)
        }
    }

    return(
        <>
        <div className="col-lg-6 mx-auto my-5 p-5 shadow text-center bg-dark ">
            <h1 className="text-light">Counter</h1>
            <h1 className="text-light">{count}</h1>
            <button onClick={inc} className="btn btn-outline-danger mt-4">+</button>
            <button onClick={dec} className="btn btn-outline-info mx-3 mt-4">-</button>
        </div>
        </>
    )
}
export default Count;