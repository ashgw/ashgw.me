interface WordCountDisplayProps {
  wordCount: number;
  minutesToRead: number;
}

export function WordCountDisplay({
  wordCount,
  minutesToRead,
}: WordCountDisplayProps) {
  return (
    <span className="text-muted-foreground text-sm">
      {`${minutesToRead} min read`} ({wordCount} words)
    </span>
  );
}
