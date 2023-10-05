import { useState } from 'react';

import { useCheckUsernameAvailability } from 'shared/api/user';

export const useCheckUsername = () => {
  const [checkUsernameAvailability, { loading: checkingUsername }] = useCheckUsernameAvailability();

  const [usernameAvailable, setUsernameAvailable] = useState(false);

  const checkUsername = async (username: string) => {
    const { data } = await checkUsernameAvailability({
      variables: { username },
    });

    setUsernameAvailable(!data?.checkUsernameAvailability);
  };

  return {
    checkUsername,
    setUsernameAvailable,
    usernameAvailable,
    checkingUsername,
  };
};
