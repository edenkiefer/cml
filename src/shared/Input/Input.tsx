import { Container } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

function Input(props: InputProps) {
  return (
    <Container>
      <label htmlFor="">{props.label}</label>
      <input {...props} />
    </Container>
  )
}

export default Input
