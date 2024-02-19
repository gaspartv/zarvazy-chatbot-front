import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

interface InputTextProps<T extends FieldValues> {
  labelText: string
  placeholder: string
  dataText: Path<T>
  register: UseFormRegister<T>
}

export default function InputText<T extends FieldValues>({
  labelText,
  placeholder,
  dataText,
  register,
}: InputTextProps<T>) {
  return (
    <div className="flex flex-col px-10">
      <label>{labelText}</label>
      <input
        style={{
          color: '#2E2E2E',
        }}
        className="h-12 rounded-md p-2"
        type="text"
        placeholder={placeholder}
        {...register(dataText)}
      />
    </div>
  )
}
