import styled from 'styled-components'

export const UserDetailedContainer = styled.div`
  position: relative;
  padding: 1rem;

  width: 400px;
  max-width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  object-fit: cover;
  border: 1px solid #30363d;
`

export const IdentityContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  font-family: 'Inter';

  h1 {
    font-size: 1.5rem;
    line-height: 1.25;
    color: #c9d1d9;
  }

  p {
    font-size: 1.25rem;
    font-style: normal;
    line-height: 1.5rem;
    color: #8b949e;
  }
`

export const Divisor = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;

  background: #30363d;
`

export const BioContent = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #c9d1d9;
  }
`

export const ConnectionsContainer = styled.div`
  position: relative;
  display: flex;

  gap: 0.2rem;

  font-family: 'Inter';
  font-size: 0.875rem;
  font-weight: 500;
  color: #8b949e;
`

export const ConnectionLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #8b949e;

  &:hover {
    text-decoration: underline;
    color: #c9d1d9;
  }

  strong {
    color: #c9d1d9;
    font-weight: 600;
  }
`

export const UserEmailContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-family: 'Inter';
  color: #c9d1d9;
  font-size: 0.875rem;

  a {
    font-family: 'Inter';
    color: #c9d1d9;
    font-size: 0.875rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #8b949e;
    }
  }
`
