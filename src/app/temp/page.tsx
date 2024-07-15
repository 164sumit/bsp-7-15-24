// "use client"
import React from 'react'
import { auth } from '../../auth';
import MobileSidebar from '@/components/MobileSidebar';
// import { auth } from './auth';

const page =async () => {
  const session = await auth();
  return (
    <MobileSidebar/>
  )
}

export default page