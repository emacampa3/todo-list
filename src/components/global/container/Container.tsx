import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1024px;
  padding: 0.5rem 0rem;
  margin-left: 0.2em;
  margin-right: 0.2em;
  margin: 0 auto;
  margin-bottom: 0.4em;
  background-color: rgb(26, 27, 30);
  color: rgb(193, 194, 197);
  border-radius: 6px;
  gap: 1em;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    font-size: 1.5rem;
    padding: 0.6rem 0rem;
  }
`
