import { exec } from 'child_process'
import { useState } from 'react'

const getPrograms = () => {
    const [list, setList] = useState([''])
    exec('wmic product get name', (err, data, getter) => {
        data = data.split('\n')
        setList(data)
    })
    return list
}

export default getPrograms