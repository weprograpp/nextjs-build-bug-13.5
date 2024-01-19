import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '@/components/atoms'
import Error404 from '@/img/Error404.svg'

const Custom404 = () => {
  const router = useRouter()

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center align-middle">
      <Image alt="Error 404" src={Error404 as string} />
      <div className="mt-10 font-header text-2xl">Página no encontrada</div>
      <div className="font-paragraph">Lo sentimos, la página que ingresaste no existe</div>

      <div className="mt-10 flex justify-center">
        <Button onClick={() => void router.push('/')}>Ir al inicio</Button>
        <Button buttonStyle="primary" childrenClasses="ml-4" onClick={() => void router.back()}>
          Ir a la página anterior
        </Button>
      </div>
    </div>
  )
}

export default Custom404
