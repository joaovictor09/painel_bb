import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { Fragment, useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const navigation = ['Dashboard', 'Clientes', 'Otimizações', 'Atendimentos', 'Tarefas']
const profile = ['Your Profile', 'Settings']


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {

  const { user } = useContext(AuthContext)
  const [users, setUsers] = useState([])


  // useEffect(() => {
  //   api.get("/users").then(
  //     res => {
  //       setUsers(res.data)
  //     }
  //   ).catch(err => {window.alert(err)})
  // }, []) 

  const navigate = ['Dashboard', 'Clientes', 'Otimizações', 'Atendimentos', 'Tarefas']
  const paths = ['/', '/clientes', '/otimizacoes', '/atendimentos', '/tarefas']

  return (
    <div>
      <div className='header bg-bg-dark flex w-screen justify-center  p-4'>
        <div className='header-items flex flex-row items-center justify-between w-full h-16 max-w-5xl'>
          <img src='bblogo.svg' className='h-12' />
            <div className='flex flex-row gap-4'>
            {navigation.map((item, itemIdx) =>
              
              itemIdx === 1 ? (
                <Fragment key={item}>
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a href={paths[itemIdx]} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ">
                    {item}
                  </a>
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
          <img src='eu.svg' className='h-12'/>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['painel.token']: token} = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {

    }
  }
}