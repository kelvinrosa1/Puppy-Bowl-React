export default async function fetchAllPlayers () {
    try {
        const  API = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2303-acc-ct-web-pt-a/players`);
        const response = await API.json();
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
    // fetchAllPlayers()
}