import styled from 'styled-components'

export const ListContainer = styled.ul`
  position: relative;
  width: 100%;

  border-top: 1px solid #30363d;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NotFound = styled.p`
  position: relative;
  padding: 1rem;

  color: #8b949e;
  font-family: 'Inter';
  font-size: 12px;
`

export const Item = styled.li`
  position: relative;
  width: 100%;
`

export const UserSummaryButton = styled.button`
  position: relative;
  width: 100%;
  padding: 0.8rem 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  color: #8b949e;
  font-family: 'Inter';
  font-size: 12px;

  &:hover {
    background: #30363d;
  }

  &:active {
    background: #21262d;
  }

  &:focus-visible {
    background: #21262d;
    outline: -webkit-focus-ring-color auto 1px;
  }
`

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;

  object-fit: cover;
  border: 1px solid #30363d;
`

export const Infos = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  font-family: 'Inter';

  strong {
    font-size: 14px;
    color: #c9d1d9;
    font-weight: 500;
  }

  span {
    font-size: 12px;
    color: #8b949e;
    font-weight: 400;
  }
`
