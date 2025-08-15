interface DownloadIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function DownloadIcon({
  width = 16,
  height = 16,
  className,
}: DownloadIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </svg>
  );
}
