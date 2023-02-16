import styled from 'styled-components'

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

  &:hover {
    background: #30363d;
  }

  &:active {
    background: #21262d;
  }

  &:focus {
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
    font-size: 0.875rem;
    color: #c9d1d9;
    font-weight: 500;
  }
`

export const ProfileLink = styled.a`
  position: relative;
  padding: 4px 6px;

  font-family: 'Inter';
  color: #8b949e;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;

  background-color: #161b22;
  border-radius: 0.375rem;
  border: 1px solid #30363d;

  &:hover {
    background-color: #21262d;
    color: #c9d1d9;
    border: 1px solid #c9d1d9;
  }
`
