import { useState } from 'react';

import LoginContainer from '../components/LoginContainer';
import SignUpContainer from '../components/SignUpContainer';

export default function Login() {
    const [currentContainer, setCurrentContainer] = useState('login');

    return (
        <div className="flex justify-center items-center w-full h-screen bg-blue-500">
            {currentContainer === 'login' ? (
                <LoginContainer container={setCurrentContainer} />
            ) : (
                <SignUpContainer container={setCurrentContainer} />
            )}
        </div>
    );
}
