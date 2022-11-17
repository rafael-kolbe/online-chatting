import { useNavigate } from 'react-router-dom';

export default function Chat() {
    const navigate = useNavigate();

    function handleLogout() {
        navigate('/login');
    }

    return (
        <div className="flex justify-center items-center gap-4 w-full h-screen bg-blue-500">
            <div className="flex flex-col justify-between gap-2 w-3/5 h-3/4 rounded-md bg-gray-100 p-4">
                <div className="flex flex-col justify-end h-[92%] border-2 border-black p-2">
                    text-container
                </div>
                <input className="border-2 border-black p-2" placeholder="typing-container" />
            </div>
            <div className="flex flex-col justify-between items-center gap-2 w-1/4 max-w-[260px] h-3/4 rounded-md bg-gray-100 p-4">
                <div className="text-lg">user</div>
                <button
                    className="w-3/4 h-10 rounded-md bg-red-400 hover:bg-red-600"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
