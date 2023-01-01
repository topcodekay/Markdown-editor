import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Box, Button } from "@chakra-ui/react";
import { BiItalic } from "react-icons/bi";
import { RxLetterCaseUppercase } from "react-icons/rx";
import { GoBold } from "react-icons/go";
import { FiCode } from "react-icons/fi";
import { RiLinksFill } from "react-icons/ri";
import { IoMdQuote } from "react-icons/io";
import { RiFileCodeFill } from "react-icons/ri";
import { BsImageFill } from "react-icons/Bs";
import { RxTable } from "react-icons/rx";
import { MdFormatListNumbered } from "react-icons/md";
import { RxListBullet } from "react-icons/rx";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { MdHelp } from "react-icons/md";

const Markdown = () => {
  const [textValue, setTextValue] = useState("");
  
  // const newText = `${textValue}`
  const selection = window.getSelection()

  const handleChange = (event: any) => {
    setTextValue(event.target.value)
  }

  let headerClick = () => {
  let newText = `${textValue}`
  setTextValue(`# ${newText + selection}\n`)

  }

  const boldClick = () => {
  let newText = `${textValue}` 
    setTextValue(`**${newText + selection}**`)
  }

  const italicClick = () => {
  let newText = `${textValue}` 
    setTextValue(`*${newText + selection}*`)
  }
  
  const inlineClick = () => {
  let newText = `${textValue}` 
    setTextValue(`\`${ newText + selection}\``)
  }

  const linkClick = () => {
  let newText = `${textValue}` 
    setTextValue(`[text] (https://www.stackoverflow.com/)${newText + selection}`)
  }
  
  const quoteClick = () => {
  let newText = `${textValue}` 
    setTextValue(`> ${newText + selection}`)
  }
  
  const codeClick = () => {
  let newText = `${textValue}` 
    setTextValue(` ${newText + selection}`)
  }

  const numberClick = () => {
  let newText = `${textValue}` 
    setTextValue(`1.${newText + selection}`)
  }

  const bulletedClick = () => {
  let newText = `${textValue}` 
    setTextValue(`-${newText + selection}`)
  }

  const horizontalClick = () => {
  let newText = `${textValue}` 
    setTextValue(`---${newText + selection}`)
  }



  return (
    <>
    <Box className="main">
    <Box className="sub__main">
          <Box p={10}>
            <RxLetterCaseUppercase
              onClick={headerClick} onMouseDown={(event) => 
                event.preventDefault()}/>
            <GoBold onClick={boldClick} onMouseDown={(event) => 
                event.preventDefault()}/>
            <BiItalic  onClick={italicClick}  onMouseDown={(event) => 
                event.preventDefault()}/>
            <FiCode onClick={inlineClick}  onMouseDown={(event) => 
                event.preventDefault()}/>
          </Box>
          <Box p={5}>
            <RiLinksFill
              onClick={linkClick}  onMouseDown={(event) => 
                event.preventDefault()}/>
            <IoMdQuote onClick={quoteClick}  onMouseDown={(event) => 
                event.preventDefault()}/>
            <RiFileCodeFill onClick={codeClick}  onMouseDown={(event) => 
                event.preventDefault()}/>
            <BsImageFill onClick={() => setTextValue('3')}  onMouseDown={(event) => 
                event.preventDefault()}/>
            <RxTable
              onClick={() =>
                setTextValue(`${textValue} | Column A | Column B |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |`)
              }
            />
          </Box>
          <Box p={5}>
            <MdFormatListNumbered
              onClick={numberClick}  onMouseDown={(event) => 
                event.preventDefault()}/>
            <RxListBullet onClick={bulletedClick}  onMouseDown={(event) => 
                event.preventDefault()}/>
            <RxDragHandleHorizontal onClick={horizontalClick}  onMouseDown={(event) => 
                event.preventDefault()}/>
            {"...^"}
            <MdHelp onClick={() => setTextValue(`${textValue} ?`)} />
          </Box>
        </Box>
      <Box className="container">
        <Box onChange={handleChange} className="textarea" 
        contentEditable suppressContentEditableWarning={true}>{textValue}
        </Box>
        <Box className="output">
          <ReactMarkdown>{textValue}</ReactMarkdown>
        </Box>
      </Box>
      </Box>
    </>
  );
};
export default Markdown;
