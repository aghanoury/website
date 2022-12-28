import React from 'react'
import Nav from './navbar';

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}