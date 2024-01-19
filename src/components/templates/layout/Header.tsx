import Link from 'next/link'

interface NavigationElement {
  name: string
  href: string
  current: boolean
}

interface HeaderProps {
  navigation: NavigationElement[]
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Header = ({ navigation }: HeaderProps) => {
  return (
    <header className="bg-primary-dark p-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Platsage
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              aria-current={item.current ? 'page' : undefined}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
