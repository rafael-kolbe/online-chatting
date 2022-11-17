import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Login from '../pages/Login';
import Chat from '../pages/Chat';

function ProtectedRoutes({ redirectTo }) {
    let isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function WebRoutes() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<ProtectedRoutes redirectTo={'/login'} />}>
                <Route path="/chat" element={<Chat />} />
            </Route>
        </Routes>
    );
}
