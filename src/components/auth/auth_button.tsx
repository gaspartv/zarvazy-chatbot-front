interface AuthButtonProps {
  buttonText: string
}

export default function AuthButton({ buttonText }: AuthButtonProps) {
  return (
    <div className="flex flex-col px-10">
      <button
        className="h-12 rounded-md text-xl text-orange-200 hover:text-zinc-100 hover:shadow-xl"
        style={{
          backgroundColor: '#D37930',
        }}
        type="submit"
      >
        {buttonText}
      </button>
    </div>
  )
}
