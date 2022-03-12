import React from 'react'
import Table from '../components/Table'


const gastos = [
  {
      gasto: "Juan",
      date: new Date(),
  },
  {
      gasto: "Carlos",
      date: new Date(),
  },
  {
      gasto: "Andres",
      date: new Date(),
  },
  {
      gasto: "Felipe",
      date: new Date(),
  }
]


export default function ExpensesScreen() {
  return (
    <div>
        <Table title="Gatos" tHead={["Nombre"]} data={gastos} />

    </div>
  )
}
