import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Menu = styled.div`
  width: 100%;
  height: 2em;
`

export const Container = styled.div`
  overflow: hidden;
  max-height: 100vh;
`

export const Search = styled.input`
  width: 100%;
  border: 0;
  padding: 1em;
  color: white;
  font-size: 2rem;
  background-color: transparent;
`

export const List = styled.ul`
  width: 100%;
  max-height: 50%;
  font-size: 1rem;
  list-style: none;
  padding: 1em 0;
  overflow-y: auto;
`

export const ItemList = styled.li`
  font-size: 1rem;
  list-style: none;
  padding: 1em;
  cursor: pointer;

  :hover {
    background: #44475a;
  }
`
