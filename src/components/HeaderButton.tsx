import React, {useState} from 'react'
import {Box, Button } from '@chakra-ui/react'
import {RxLetterCaseUppercase} from 'react-icons/rx'
import ReactMarkdown from 'react-markdown'

export default function HeaderButton() {
  const [textValue, setText] = useState('');
  return (
    <>
    <Box p={2}>
    <RxLetterCaseUppercase/>
    </Box>
    </>
  )
}
