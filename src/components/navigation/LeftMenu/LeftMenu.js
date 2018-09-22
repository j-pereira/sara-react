import React from 'react'

const leftMenu = () => {
    return (    
        <nav class="nav flex-column bg-dark sidenav">
            <a class="nav-link active" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#">Disabled</a>
        </nav>
    )
}

export default leftMenu;
