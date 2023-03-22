import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Lead from '@/components/Lead';

const Home: NextPage = () => {
  
  // redirect to home page if user is logged in
  const router = useRouter();
  
  useEffect(() => {
    if (!localStorage.getItem('token')) {
        router.push('/signin');
    }
}, []);

  return (
    <Lead />
  )
}

export default Home
