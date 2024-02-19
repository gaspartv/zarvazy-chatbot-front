interface InputCheckboxProps {
  id: string
  labelText: string
}

export default function InputCheckbox({ id, labelText }: InputCheckboxProps) {
  return (
    <div className="flex items-center gap-2 ">
      <input type="checkbox" id={id} className="h-5 w-5 cursor-pointer" />
      <label htmlFor={id} className="cursor-pointer">
        {labelText}
      </label>
    </div>
  )
}
