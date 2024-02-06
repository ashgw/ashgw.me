// react-syntax-highlighter has no types
// @ts-nocheck
import clsx from 'clsx';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import go from 'react-syntax-highlighter/dist/cjs/languages/prism/go';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';

SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('go', go);

type Props = {
  language: string;
  code: string;
  showLineNumbers?: boolean;
  className?: string;
};

export default function CodeBlock({
  code,
  language,
  showLineNumbers,
  className,
}: Props) {
  return (
    <div
      className={clsx('relative rounded !bg-black p-4 shadow-lg', className)}
    >
      <SyntaxHighlighter
        className="!m-0 overflow-auto !p-0 text-sm dark:!bg-black dark:[&>*]:!bg-black"
        language={language}
        style={oneDark}
        showLineNumbers={showLineNumbers}
        lineNumberStyle={{
          width: '3.25em',
          position: 'sticky',
          left: 0,
          background: 'black',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
