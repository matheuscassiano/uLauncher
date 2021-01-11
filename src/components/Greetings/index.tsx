// import getPrograms from '../../services/getPrograms'
import { exec } from 'child_process'
import React, { useEffect, useState } from 'react'
import { Menu, Container, Search, List, ItemList } from './styles'
import search from './script'

const Greetings: React.FC = () => {
  const [list, setList] = useState([''])
  useEffect(() => {
    // setList(JSON.stringify(getPrograms()))
    // console.log(list)
    exec('wmic product get name', (err, data, getter) => {
      const newData = data.split('\n')
      setList(newData)
    })
  }, [])
  return (
    <Container>
      <Menu />
      <Search onChange={({ target }) => search(list, setList, target.value)} placeholder="Search" />
      <List>
        {list.map(item => <ItemList>{item}</ItemList>)}
      </List>
    </Container>
  )
}

export default Greetings
