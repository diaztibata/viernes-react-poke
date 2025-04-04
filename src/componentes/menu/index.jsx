import { Link } from 'react-router-dom'
import './style.css'

function Menu() {

  return (
    <nav className='c-menu'>
      <Link to="/">home</Link>
      <Link to="/favoritos">favoritos</Link>
      <Link to="/usuario">usuario</Link>
      <Link to="/aleatorio">aleatorio</Link>
      <Link to="/capturados">Capturados</Link>
    </nav>
  )
}

export default Menu