import Link from "next/link";

const LoginPage = () => {
    return (
        <div>
            <h1>Login Pages</h1>
            Belom punya akun ? <Link href="/register">Register</Link>
        </div>
    );
};

export default LoginPage;
