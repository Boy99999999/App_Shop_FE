'use client'
import Head from 'next/head'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {

  const fetchApiUser = async () => {
<<<<<<< HEAD
    await axios.get("http://localhost:3001/api/users?limit=10&page=1&order=created%20asc").then((res)=> {
      console.log("res")
    })
  }
  useEffect(()=>{
    fetchApiUser
  },[])

=======
    await axios.get("http://localhost:3001/api/users?limit=10&page=1&order=created%20asc").then((res) =>{
      console.log("res")
    })
  }
    useEffect(() => {
    fetchApiUser()
  },[])
>>>>>>> 1dca977db40fe6602c07cdc68dbae4157dbee338
  return (
    <>
      <Head>
        <title>Lập trình thật dễ</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
<<<<<<< HEAD
      <Button variant='contained'>Hello world Updated1111</Button>
=======
      <Button variant='contained'>Hello world Updated</Button>
>>>>>>> 1dca977db40fe6602c07cdc68dbae4157dbee338
    </>
  )
}
