'use client'

import AuthBackground from '@/components/auth/auth_background'
import AuthButton from '@/components/auth/auth_button'
import AuthLogo from '@/components/auth/auth_logo'
import InputCheckbox from '@/components/input_checkbox'
import InputText from '@/components/input_text'
import LinkComponent from '@/components/link'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
})

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function onSubmit(data: any) {
    console.log(data)
  }

  return (
    <main>
      <AuthBackground />

      <div className="flex items-center flex-col gap-10">
        <AuthLogo width={454} height={136} />

        <form
          className="relative top-16 rounded-2xl w-full flex flex-col gap-6 py-6"
          style={{
            maxWidth: '500px',
            backgroundColor: '#2E2E2E',
            color: '#D9D9D9',
          }}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <InputText
            labelText="E-mail"
            placeholder="seu email aqui..."
            dataText="email"
            register={register}
          />
          <p className="text-orange-400 pl-10 -mt-6 h-6">
            {errors.email && errors.email.message}
          </p>

          <InputText
            labelText="Senha"
            placeholder="sua senha aqui.."
            dataText="password"
            register={register}
          />
          <p className="text-orange-400 pl-10 -mt-6 h-6">
            {errors.password && errors.password.message}
          </p>

          <div className="flex px-10 justify-between items-center">
            <InputCheckbox id="myCheckbox" labelText="Lembrar senha" />

            <LinkComponent linkText="Esqueceu a senha?" linkUrl="/recovery" />
          </div>

          <AuthButton buttonText="Entrar" />

          <p className="cursor-default px-10">
            Não tem cadastro?{' '}
            <LinkComponent linkText="Criar nova conta" linkUrl="/register" />
          </p>
        </form>
      </div>
    </main>
  )
}
