import React from 'react'
import Table from '../components/Table'

const users = [
    {
        name: "Juan",
        username: "juan23",
        active: true,
        date: new Date(),
    },
    {
        name: "Carlos",
        username: "carlos54",
        active: false,
        date: new Date(),
    },
    {
        name: "Andres",
        username: "andester2",
        active: false,
        date: new Date(),
    },
    {
        name: "Felipe",
        username: "felipe56",
        active: true,
        date: new Date(),
    }
]


export default function UsersScreen() {
  return (
    <section className='screen'>
        <Table title="Usuarios" tHead={["Nombre", "Usuario", "Active"]}>
            <tbody>
                {users.map((user) => (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.active}</td>
                        <td>{user.date.toString()}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </section>
  )
}
