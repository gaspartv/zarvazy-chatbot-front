import Link from 'next/link'

interface LinkComponentProps {
  linkText: string
  linkUrl: string
}

export default function LinkComponent({
  linkText,
  linkUrl,
}: LinkComponentProps) {
  return (
    <Link
      className="hover:bg-zinc-800 hover: p-2 rounded-md"
      style={{
        color: '#D37930',
      }}
      href={linkUrl}
    >
      {linkText}
    </Link>
  )
}
