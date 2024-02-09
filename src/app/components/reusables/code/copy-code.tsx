'use client';
import { FC } from 'react';
import { Copy } from 'lucide-react';
import clsx from 'clsx';
import { useCopyToClipboard } from 'react-use';

interface CopyButtonProps {
  code: string;
  className?: string;
}

const CopyButton: FC<CopyButtonProps> = ({ code, className }) => {
  const [_, copyToClipboard] = useCopyToClipboard();
  return (
    <button
      className={clsx(
        'rounded-xl border-2 border-[#191919] p-2 px-3 py-2 average-transition  hover:average-translate  hover:border-[#340929]   active:bg-[#340929]',
        className
      )}
      onClick={() => {
        copyToClipboard(code);
      }}
    >
      <Copy size={'24px'} strokeWidth={'2px'} />
    </button>
  );
};

export default CopyButton;
