import styled from 'styled-components'

export const FormContainer = styled.form`
  position: relative;

  width: 450px;

  background-color: #0d1117;
  border: 1px solid #30363d;
  color: #fff;

  border-radius: 6px;
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, background-color, box-shadow, border-color;
`

export const InputElement = styled.input`
  width: 100%;
  line-height: 20px;
  padding: 5px 12px;
  font-size: inherit;
  color: inherit;
  background: none;
  border: 0;
  caret: transparent block;

  &:focus {
    color: #c9d1d9;
  }

  &::after {
    content: '/';
    color: #6a737d;
    font-family: 'Inter';
    font-size: 14px;

    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`
