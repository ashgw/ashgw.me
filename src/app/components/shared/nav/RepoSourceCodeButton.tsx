import { REPO_SOURCE } from '@/lib/constants';
import { GitBranch } from 'lucide-react';
import NextLink from 'next/link';

export function RepoSourceCodeButton() {
  return (
    <button>
      <NextLink href={REPO_SOURCE} target="_blank" rel="noopener noreferrer">
        <GitBranch
          strokeWidth={'1.5px'}
          size={'20px'}
          style={{
            display: 'inline-block',
            marginLeft: '5px',
            marginBottom: '3px',
          }}
        />
      </NextLink>
    </button>
  );
}