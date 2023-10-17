import { Container } from './styles'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  select?: boolean
}

function Input(props: InputProps) {
  return (
    <Container>
      <label>{props.label}</label>
      <input {...props} />
    </Container>
  )
}

export default Input
