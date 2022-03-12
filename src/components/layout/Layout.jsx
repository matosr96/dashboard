import React from 'react'
import Aside from '../aside/aside'
import Header from '../header/Header'

export default function Layout({children}) {
  return (
    <>
        <Header />
        <main>
          <Aside />
          {children}
        </main>
    </>
  )
}
