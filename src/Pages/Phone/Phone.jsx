import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Phone = () => {
    const[phone,setPhone] = useState({})
    const {id} = useParams()

    const phones = useLoaderData()

    useEffect(()=>{
        const findPhone = phones?.find((phone)=> phone.id === id)
        setPhone(findPhone);
    },[id,phones])
    
    return (
        <div>
            <h2>Phone:{phone.id}</h2>
        </div>
    );
};

export default Phone;