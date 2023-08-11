"use client"
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { PUBLIC_SIDEBAR_MENU } from "@/app/config";

export const PublicHeader = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter()

  const handleClick = (url: string) => {
    router.push(url)
  }

  return (
    <>
    <div className="public-navbar">
    <Button icon="pi pi-bars" className="burger" onClick={() => setVisible(true)} />
      <div className="navbar-title">
        Turnos Consultorio
      </div>
    </div>
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Menu</h2>
        <ul className="sidebar">
        {
          PUBLIC_SIDEBAR_MENU.ITEMS.map((el, index) => (
            <li key={index} className="sidebar-item" onClick={() => handleClick(el.url)}>
              <span>{el.label}</span>
            </li>
          ))
        }
        </ul>
    </Sidebar>
    </>
  )
}
