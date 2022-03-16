import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import router from 'next/router';
import { destroyCookie } from 'nookies';
import { Fragment } from "react";


interface IHeaderProps {
  index: number;
}

export function Header(props) {

  function signOut() {
    destroyCookie(null, 'painel.token')
    router.push('/')
    return
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const navigation = ['Dashboard', 'Clientes', 'Otimizações', 'Atendimentos', 'Tarefas']
  const paths = ['/dashboard', '/clientes', '/otimizacoes', '/atendimentos', '/tarefas']


  return (
    <div className='header bg-bg-dark flex w-screen justify-center  p-4'>
        <div className='header-items flex flex-row items-center justify-between w-full h-12 max-w-5xl gap-8'>
          <img src='logo-blue-branca.png' className='h-12' />

            <div className='flex flex-row justify-between align-center gap-4 w-full'>

              <div className='flex flex-row gap-4 w-max'>

                {/* //LOAD HEADER MENUS */}
              {navigation.map((item, itemIdx) =>
                itemIdx === props.index ? (
                  <Fragment key={item}>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href={paths[itemIdx]}>
                      <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ">
                        {item}
                      </a>
                    </Link>
                  </Fragment>
                ) : (
                  <a
                    key={item}
                    href={paths[itemIdx]}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </a>
                )
              )}

              </div>

              <input
                type="tex"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Ver clientes"
              />

            </div>

              {/* //FLOATING OPTIONS */}

              <Menu as="div" className="relative inline-block  text-left">
                <div>
                  <Menu.Button className='appearance-none flex flex-row align-center border-none focus:outline-none '>
                    <img className='max-h-14' src='eu.png' />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Seu perfil
                          </a>
                        )}
                      </Menu.Item>
                      {/* //SIGN OUT */}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block w-full text-left px-4 py-2 text-sm'
                            )}
                            onClick={signOut}
                          >
                            Sair
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
            </Menu>
        </div>
      </div>
  )
}