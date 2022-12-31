import React from 'react'
import { Box, Button, ListItem, UnorderedList } from '@chakra-ui/react'
import HeaderButton from './HeaderButton'
import BoldButton from './BoldButton'
import ItalicButton from './ItalicButton'
import InlineButton from './inlineButton'

const button = () => [
    {
        basic : <HeaderButton/>
    },
    {
        basic : <BoldButton/>
    },
    {
        basic : <ItalicButton/>
    },
    {
        basic : <InlineButton/>
    }
]



export default function FirstComponent() {
    const newButton = button()
  return (
    <>
    <Box>
    <UnorderedList style={{display: 'flex', listStyle: 'none'}}>
            {newButton.map((b: any, index) =>(
        <ListItem key={index} style={{ padding: '2px'}}>
                 {b.basic}
        </ListItem>
            ))}
            </UnorderedList>
    </Box>
    </>
  )
}