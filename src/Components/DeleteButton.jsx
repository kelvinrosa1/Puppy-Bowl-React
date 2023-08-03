import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DeleteButton() {
  let { id } = useParams();
  let navigate = useNavigate()

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2303-acc-ct-web-pt-a/players/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
    location.reload()


  };

  return <button onClick={()=>{
    handleDelete();
    navigate('/')
  }}>Delete</button>;
}

export default DeleteButton;

