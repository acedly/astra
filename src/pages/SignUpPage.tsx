import AuthForm from "@/components/auth/AuthForm";

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <AuthForm mode="signup" />
        </div>
    );
};

export default SignUpPage;