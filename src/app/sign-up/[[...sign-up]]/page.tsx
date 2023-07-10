import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return(
    <>
    <div className="my-20">
        <div className="flex justify-center items-center py-10">
            <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/protectedPage"/>
        </div>
    </div>
    </>
    )}

export default SignUpPage;