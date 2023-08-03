import { useState } from "react";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import DeleteButton from "./DeleteButton";

function SinglePlayer() {
    let { id } = useParams()
    const [singleId , setSingleId] = useState({})

    useEffect(()=>{
        const fetchSingleData = async () => {
            try {
                const response = await fetch(
                  `https://fsa-puppy-bowl.herokuapp.com/api/2303-acc-ct-web-pt-a/players/${id}`
                );
                const result = await response.json();
                console.log('data',result.data.player);
                setSingleId(result.data.player)
              } catch (err) {
                console.error(err);
              }
        }
    fetchSingleData()
    },[])
  return (
    <div className="singlePlayer">
    <h2>Name : {singleId.name}</h2>
    <h4>Breed : {singleId.breed}</h4>
    <h4>Status : {singleId.status}</h4>
    <h4>Team Id : {singleId.id}</h4>
    <h4>Created At : {singleId.updatedAt}</h4>
    <img src={`${singleId.imageUrl}`}/><br/>
    <DeleteButton/>
    </div>
  )
}

export default SinglePlayer