import { Breadcrumb } from 'flowbite-react'
import React from 'react'
import { HiHome } from 'react-icons/hi'

export default function Dashboard() {
    return (
        <div>
            <Breadcrumb aria-label="Default breadcrumb example">
                <Breadcrumb.Item href="#" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
               
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
