import AuthForm from "@/components/auth/AuthForm";

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <AuthForm mode="signin" />
        </div>
    );
};

export default SignInPage;