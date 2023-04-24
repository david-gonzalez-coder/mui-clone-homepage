//component from a third party with some modifications

// ------------------------IMPORTS-------------------------//
// dependecies
import toast from 'cogo-toast'
import copy from 'copy-to-clipboard'
import Highlight, { defaultProps } from 'prism-react-renderer'
// icons
import { IoMdClipboard } from 'react-icons/io'
// theme
import PrismTheme from 'prism-react-renderer/themes/vsDark'
// -----------------------END-IMPORTS------------------------//

// -----------------------COMPONENT------------------------//
const CodeBlock = ({ code="", language = "" }) => {
  code = code.trim()
  const copyToClipboard = () => {
    copy(code)
    toast.success('Copied to clipboard', {
      position: 'bottom-center'
    })
  }

  return (
    <Highlight
      {...defaultProps}
      theme={PrismTheme}
      code={code}
      language={language}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className="codeBlock__pre p-4 rounded-xl relative overflow-x-auto" style={style}>

          {/* ------------COPY--------- */}
          <a onClick={copyToClipboard} className='absolute right-4'>
            <IoMdClipboard className='text-white text-xl' />
          </a>

          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key}{...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
