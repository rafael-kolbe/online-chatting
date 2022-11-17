import { useNavigate } from 'react-router-dom';

export default function LoginContainer({ container }) {
    const navigate = useNavigate();

    function handleContainer() {
        container('sign-up');
    }

    function handleLogin() {
        navigate('/chat');
    }

    return (
        <div className="flex flex-col justify-between items-center w-[360px] h-[420px] bg-pink-300 rounded-md p-10">
            <h1 className="mb-10 font-bold text-2xl">Login</h1>
            <input
                className="w-full h-10 rounded-md text-center border-2 border-red-300"
                placeholder="Email"
            />
            <input
                className="w-full h-10 rounded-md text-center border-2 border-red-300 mb-10"
                placeholder="Password"
                type="password"
            />
            <div className="flex justify-evenly items-center w-full h-10">
                <button
                    className="w-1/3 h-full rounded-md bg-red-400 hover:bg-red-600"
                    onClick={handleLogin}
                >
                    Enter
                </button>

                <button
                    className="w-1/3 h-full rounded-md bg-red-400 hover:bg-red-600"
                    onClick={handleContainer}
                >
                    Sign-up
                </button>
            </div>
        </div>
    );
}
