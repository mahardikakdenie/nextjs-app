import { useState } from "react";
import Head from 'next/head';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login details:", { email, password });
    };

    return (
        <div className="mt-5">
             <Head>
                <title>Login Page</title>
                <meta name="description" content="Login to your account" />
                <meta name="keywords" content="login, user login, account access" />
            </Head>

            <div className="flex justify-center items-center">
                <div className="border p-10 w-full max-w-lg rounded-md"> {/* Adjust the width here */}
                    <div className="">
                        <h1 className="text-xl mb-4 text-center">
                            Login
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border rounded px-4 py-2 w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="border rounded px-4 py-2 w-full"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
