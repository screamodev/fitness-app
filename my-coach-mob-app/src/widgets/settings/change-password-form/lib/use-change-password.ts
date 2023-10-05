import { useChangePasswordMutation } from 'shared/api/user';

export const useChangePassword = () => {
  const [changePassword, { error, loading }] = useChangePasswordMutation();

  const handleChangePassword = (currentPassword: string, newPassword: string) => {
    return changePassword({ variables: { currentPassword, newPassword } });
  };

  return {
    loading,
    error,
    changePassword: handleChangePassword,
  };
};
