import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <>
      <h1>ログイン画面</h1>
        <button onClick={() => signIn("google", { callbackUrl: "/" })}>
          SignIn With Google
        </button>
    </>
  );
};

export default SignIn;