"use client"
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useState } from "react";

export const PublicLayoutNavbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <div className="public-navbar">
    <Button icon="pi pi-bars" className="burger" onClick={() => setVisible(true)} />
      <div className="navbar-title">
        Turnos Consultorio
      </div>
    </div>
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </Sidebar>
    </>
  )
}
