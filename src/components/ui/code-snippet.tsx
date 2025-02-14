import { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css' // You can change the theme as needed
import { Copy, CopyCheck } from 'lucide-react'

// Dynamically import Prism languages (optional)
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-typescript'
// Import bash/shell syntax highlighting for curl
import 'prismjs/components/prism-bash'

type SupportedLanguages =
  | 'js'
  | 'python'
  | 'java'
  | 'typescript'
  | 'html'
  | 'css'
  | 'bash' // Add more languages as needed

interface CodeSnippetProps {
  code: string
  language: SupportedLanguages
}

const CodeSnippet = ({ code, language }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => { 
    // Prism.js needs to highlight the code after it is rendered
    Prism.highlightAll()
  }, [code])

  return (
    <div className='relative '>
      <pre className='dark:bg-background bg-primary dark:border-t  w-full xl:max-w-[600px] text-white p-[20px]   !rounded-[32px] no-scrollbar'>
        <code
          className={`language-${language}  w-full max-w-[600px] !flex-wrap !text-wrap`}
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(code, Prism.languages[language], language),
          }}
        />
      </pre>

      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <button className='absolute top-4 right-4 p-2 dark:bg-primary-item bg-muted text-foreground dark:text-white rounded-xl hover:bg-muted/80 dark:hover:bg-primary-item/80 focus:outline-none'>
          {copied ? (
            <CopyCheck className='w-4 h-4' />
          ) : (
            <Copy className='w-4 h-4' />
          )}
        </button>
      </CopyToClipboard>
    </div>
  )
}

export default CodeSnippet
