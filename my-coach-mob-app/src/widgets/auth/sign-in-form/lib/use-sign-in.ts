import { useSession } from 'entities/session';
import { useSignInMutation } from 'shared/api/auth';

export const useSignIn = () => {
  const { sigInUser } = useSession();

  const [signIn, { error, loading }] = useSignInMutation();

  const handleSignIn = async (email: string, password: string) => {
    const { data } = await signIn({ variables: { email, password } });

    if (data?.signIn) {
      const {
        signIn: { accessToken, user },
      } = data;

      await sigInUser({ token: accessToken, user });
    }
  };

  return {
    loading,
    error,
    signIn: handleSignIn,
  };
};
