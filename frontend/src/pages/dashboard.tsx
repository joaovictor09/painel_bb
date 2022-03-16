import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useContext, useState } from 'react'
import { Header } from '../components/Header'
import { AuthContext } from '../contexts/AuthContext'

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

  return (


    <div className='flex flex-col gap-6 align-center justify-center'>
      <Head>
        <title>Dashboard</title>
      </Head>
      
      <Header index={0}/>

      {/* // DASHBOARD */}
      
      <div className='w-screen h-max flex flex-col align-center justify-items-center'>
        <div className='bg-bg-light border-dashed border-2 border-sky-500 border-black rounded-md self-center flex flex-col items-center w-full max-w-5xl py-4 px-12 gap-4 mt-10'>

          <h1 className='px-3 py-2 rounded-md text-2xl font-bold'>Dashboard</h1>
          <div className='bg-bg-dark w-full rounded-md flex flex-col items-center py-6 px-10'>

            <div className='w-full flex flex-col items-center gap-4'>
              <div className='w-full flex flex-col items-center gap-4'>

                {/* //SEUS CLIENTE */}

                <h2 className='px-3 py-2 text-white rounded-md text-xl font-bold'>Seus clientes</h2>
                <div className='flex flex-col w-full divide-y divide-black'>

                  <div className='bg-gray-200 w-full flex flex-row justify-between px-6 rounded-t-md border-black'>

                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      Clientes ativos
                    </span>
                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      30
                    </span>
                  </div>
                  
                  <div className='bg-gray-200 w-full flex flex-row justify-between px-6 border-solid border-bg-dark'>
                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      Clientes pausados
                    </span>
                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      2
                    </span>
                  </div>

                  <div className='bg-gray-200 w-full flex flex-row justify-between px-6 rounded-b-md'>
                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      Clientes cancelado (30 dias)
                    </span>
                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      1
                    </span>
                  </div>
                </div>

              </div>

              {/* //AGENCIA */}

              <div className='w-full flex flex-col items-center gap-4'>
                <h2 className='px-3 py-2 text-white rounded-md text-xl font-bold'>Agência</h2>
                <div className='flex flex-col w-full divide-y divide-black'>

                  <div className='bg-gray-200 w-full flex flex-row justify-between px-6 rounded-t-md'>

                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      Clientes ativos
                    </span>
                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      710
                    </span>
                  </div>
                  
                  <div className='bg-gray-200 w-full flex flex-row justify-between px-6 '>
                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      Clientes ativos
                    </span>
                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      30
                    </span>
                  </div>

                  <div className='bg-gray-200 w-full flex flex-row justify-between px-6 rounded-b-md'>
                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      Clientes ativos
                    </span>
                    <span className='px-3 py-2 text-black rounded-md text-lg font-medium'>
                      30
                    </span>
                  </div>
                </div>

              </div>

              {/* META */}

              <div className='w-full flex flex-col items-center gap-4'>
                <h2 className='px-3 p-1 text-white rounded-md text-xl font-bold'>Meta</h2>
                <div className='flex flex-col w-full'>
                {/* PROGRESS BAR */}
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-white  dark:text-white">Fazenda Park Hotel</span>
                    <span className="text-sm font-medium text-white dark:text-white">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div className="bg-blue-600 h-4 rounded-full w-3/6" ></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
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