import Image from 'next/image'

import ErrorImage from '@/img/Error.svg'

const ErrorPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center align-middle">
      <Image alt="Error 404" src={ErrorImage as string} />
      <div className="mt-10 font-header text-2xl">¡Ups! Hubo un problema</div>
      <div className="font-paragraph">Estamos trabajando para solucionarlo</div>
    </div>
  )
}

export default ErrorPage
