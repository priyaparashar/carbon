// Layout.js
import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

function Layout() {
    const navigate = useNavigate();
    const location = useLocation();
    const isOnBaseLink = location.pathname === "\/"
    return (
        <div>
            <header>
                <h1>Carbon Check</h1>
                {!isOnBaseLink ? <>
                    <button onClick={() => navigate(-1)}>Back</button>
                </> : null}
                {isOnBaseLink ? <nav>
                    <ul>
                        <Link to="create-account" >Create Account</Link>
                        <br />
                        <Link to="users" >Users list</Link>
                    </ul>
                </nav> : null}
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;