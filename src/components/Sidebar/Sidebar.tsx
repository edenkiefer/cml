import { Container } from './styles'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaUsers } from 'react-icons/fa'
import { FaBoxOpen } from 'react-icons/fa6'

function Sidebar() {
  return (
    <Container>
      <img src={logo} alt="Logo CML" />
      <nav>
        <ul>
          <li>
            <NavLink to="/orders">
              <FaShoppingCart />
              <span>Pedidos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <FaBoxOpen />
              <span>Estoque</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/users">
              <FaUsers />
              <span>Usuários</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar
