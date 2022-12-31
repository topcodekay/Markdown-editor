import React from 'react'
import { Box, Button, ListItem, UnorderedList } from '@chakra-ui/react'
import Linkquote from './Linkquote'
import Blockquote from './Blockquote'
import CodeBlock from './CodeBlock'
import Image from './Image'
import Table from './Table'

const qoute = () => [
    {
        second : <Linkquote/>
    },
    {
        second : <Blockquote/>
    },
    {
        second : <CodeBlock/>
    },
    {
        second : <Image/>
    },
    {
        second : <Table/>
    }
]



export default function SecondComponent() {
    const newQuote = qoute()
  return (
    <>
    <Box>
    <UnorderedList style={{display: 'flex', listStyle: 'none'}}>
            {newQuote.map((box: any, index) =>(
        <ListItem key={index} style={{ padding: '2px'}}>
                 {box.second}
        </ListItem>
            ))}
            </UnorderedList>
    </Box>
    </>
  )
}
