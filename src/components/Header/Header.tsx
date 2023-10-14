import { Container } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

interface HeaderProps {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <Link to="/">
        <img src={logo} alt="Logo CML" />
      </Link>
    </Container>
  )
}

export default Header
