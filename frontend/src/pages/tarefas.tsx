import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useContext, useState } from 'react'
import { Header } from '../components/Header'
import { AuthContext } from '../contexts/AuthContext'

const navigation = ['Dashboard', 'Clientes', 'Otimizações', 'Atendimentos', 'Tarefas']
const profile = ['Your Profile', 'Settings']


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {

  const { user } = useContext(AuthContext)
  const [users, setUsers] = useState([])

  return (
    <div className='flex flex-col'>
      <Head>
        <title>Tarefas</title>
      </Head>

      <Header index={4}/>
      
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