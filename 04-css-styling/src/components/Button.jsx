import { styled } from 'styled-components'

const Button = styled.button`
  ${({ type }) =>
    type === 'button' ?
    `
      color: #f0b322;
      background-color: transparent;
      border: none;

      &:hover {
        color: #f0920e;
      }
    ` :
    `
      padding: 1rem 2rem;
      font-weight: 600;
      text-transform: uppercase;
      color: #1f2937;
      background-color: #f0b322;
      border-radius: 6px;
      border: none;

      &:hover {
        background-color: #f0920e;
      }
    `
  }
`

export default Button
