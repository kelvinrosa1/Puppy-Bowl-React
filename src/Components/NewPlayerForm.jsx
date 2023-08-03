import { useState } from "react"


function NewPlayerForm() {
    const [name, setName]=useState('');
    const [breed, setBreed]=useState('');
    const [status, setStatus]=useState('');
    const [img, setImg] = useState('')
    const [error, setError]=useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(
                `https://fsa-puppy-bowl.herokuapp.com/api/2303-acc-ct-web-pt-a/players`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name:name,
                  breed:breed,
                  status:status,
                  imageUrl:img,
                }),
              }
            );
            const result = await response.json();
            console.log('this is result',result);
            setName("")
            setBreed("")
            setStatus("")
            setImg("")
          } catch (error) {
            setError(error)
            console.error('There was a error adding a player', error);
          }
    }



  return (
    <>

    <form onSubmit={handleSubmit} className="submitForm">

    <h2>Want to Add A New Player?</h2>
    {error && <p>{error}</p>}

        <label>
            {''}
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
        </label><br/>

        <label>
            {''}
            <input value={breed} onChange={(e)=>setBreed(e.target.value)} placeholder="Breed"/>
        </label><br/>

        <label>
             {''}
            <input value={img} onChange={(e)=>setImg(e.target.value)} placeholder="Image Link"/>
        </label>

        <div>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="None">None</option>
            <option value="bench">Bench</option>
            <option value="field">Field</option>
        </select>

        </div>

        <button>Submit</button>

    </form>
    </>
  )
}

export default NewPlayerForm