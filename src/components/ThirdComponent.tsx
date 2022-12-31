import React from 'react'
import InlineButton from './inlineButton'
import Help from './Help'
import HorizontalRule from './HorizontalRule'
import NumberList from './NumberList'
import Bulleted from './Bulleted'
import Formatting from './Formatting'
import {Box, Button, ListItem, UnorderedList } from '@chakra-ui/react'


const listType = () => [
    {
        title: <NumberList/>
    },
    {
        title: <Bulleted/>
    },
    {
        title: <HorizontalRule/>
    },
    {
        title: <Formatting/>
    },
    {
        title: <Help/>
    }
]



export default function ThirdComponent() {
    const newListType = listType()
  return (
    <>
    <Box style={{display: 'flex'}}>
    <Box>
    <UnorderedList style={{display: 'flex', listStyle: 'none'}}>
            {newListType.map((box: any, index) =>(
        <ListItem key={index} style={{ padding: '2px'}}>
                 {box.title} 
        </ListItem>
            ))}
            </UnorderedList>
    </Box>
    </Box>
    </>
  )
}
