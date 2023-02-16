import styled from 'styled-components'

export const ListContainer = styled.ul`
  position: relative;
  width: 100%;

  border-top: 1px solid #30363d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Item = styled.li`
  position: relative;
  width: 100%;

  & + & {
    border-top: 1px solid #30363d;
  }
`
