
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <Link to='/'><h1 className="nav">All Players</h1></Link>
    </div>
  )
}

export default Navbar