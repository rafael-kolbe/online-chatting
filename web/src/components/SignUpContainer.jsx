export default function SignUpContainer({ container }) {
    function handleContainer() {
        container('login');
    }

    return (
        <div className="flex flex-col justify-between items-center w-[360px] h-[420px] bg-pink-300 rounded-md p-10">
            <h1 className="mb-10 font-bold text-2xl">Create Account</h1>
            <input
                className="w-full h-10 rounded-md text-center border-2 border-red-300"
                placeholder="Username"
            />
            <input
                className="w-full h-10 rounded-md text-center border-2 border-red-300"
                placeholder="Email"
                type="email"
            />
            <input
                className="w-full h-10 rounded-md text-center border-2 border-red-300 mb-10"
                placeholder="Password"
                type="password"
            />
            <div className="flex justify-evenly items-center w-full h-10">
                <button
                    className="w-1/3 h-full rounded-md bg-red-400 hover:bg-red-600"
                    onClick={handleContainer}
                >
                    Create
                </button>
                <button
                    className="w-1/3 h-full rounded-md bg-red-400 hover:bg-red-600"
                    onClick={handleContainer}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}
