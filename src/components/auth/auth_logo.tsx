import Image from 'next/image'

interface LogoProps {
  width: number
  height: number
}

export default function AuthLogo({ width, height }: LogoProps) {
  return (
    <div className="relative top-16">
      <Image
        src="/logo.png"
        alt="logo zarvazy chatbot"
        width={width}
        height={height}
        priority
      />
    </div>
  )
}
