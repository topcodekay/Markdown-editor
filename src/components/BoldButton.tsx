import React, { useState } from 'react'
import {Box, Button } from '@chakra-ui/react'
import {GoBold} from 'react-icons/go'

export default function BoldButton() {
  const [textValue, setTextValue] = useState("")
  
  return (
    <>
    <Box p={2}>
      <GoBold onClick={() => setTextValue(`${textValue}**Strong Bold**`)}/>
    </Box>
    </>
  )
}
