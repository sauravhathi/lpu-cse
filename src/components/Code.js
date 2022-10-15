import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
// IoCopyOutline, MdContentPaste, IoMoonOutline, IoIosSunny

import { IoCopyOutline } from "react-icons/io5"
import { MdContentPaste } from "react-icons/md"
import { IoMoonOutline } from "react-icons/io5"
import { IoIosSunny } from "react-icons/io"



const Code = ({ children, language, isDark, setIsDark }) => {
  const [isCopied, setIsCopied] = useState(false)

  SyntaxHighlighter.registerLanguage('jsx', jsx);

  const setCopied = () => {
    setIsCopied(true)
    setTimeout(() => { setIsCopied(false) }, 1000);
  }

  const [isHover, setIsHover] = useState(false)

  const preHover = () => {
    setIsHover(true)
  }


  return (

    <div className="flex flex-col justify-center ">
      <div className="relative my-4">
        <SyntaxHighlighter language={language} style={isDark ? materialDark : materialLight} onMouseEnter={preHover} onMouseLeave={() => setIsHover(false)}>
          {children}
        </SyntaxHighlighter>
        <div className="absolute top-3 right-3 flex flex-row justify-center items-center" style={{ display: isHover ? "block" : "none" }}>
          <button onClick={() => setIsDark(!isDark)} className={isDark ? "border-[1.5px] border-[#ffffff27] hover:border-[#ffffff96] text-white ml-1 py-1 px-3 rounded-md" : "border-[1.5px] border-[#00000027] hover:border-[#00000096] text-black py-1 px-3 rounded-md"}>
            {isDark ? <IoMoonOutline /> : <IoIosSunny />}

          </button>
          <CopyToClipboard text={children}>
            <button onClick={() => setCopied()} className={isDark ? "border-[1.5px] border-[#ffffff27] hover:border-[#ffffff96] text-white ml-1 py-1 px-3 rounded-md" : "border-[1.5px] border-[#00000027] hover:border-[#00000096] text-black ml-1 py-1 px-3 rounded-md"}>
              {isCopied
                ? <span title="Copied!"><MdContentPaste /></span>
                : <span title="Copy to Clipboard"><IoCopyOutline /></span>
              }
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>




  )
}

export default Code