import React from 'react'
import Table from '../components/Table'

export default function CategoriesScreen() {
  return (
    <section className='screen'>
        <Table title="Categorias" tHead={["Nombre"]} />
    </section>
  )
}
