import React from 'react';
import SignInPresenter from './SignInPresenter';
import { signOut, useSession } from 'next-auth/react';

const SignInContainer = () => {
  const { data: session } = useSession();
  if (session) {
    signOut();
  }
  return <SignInPresenter />;
};

export default SignInContainer;
