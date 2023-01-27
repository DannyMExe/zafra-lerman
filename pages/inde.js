import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '../src/components/NavBar'
import styled from 'styled-components'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar />
    </>
  )
}
