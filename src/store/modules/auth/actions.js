/* eslint-disable import/prefer-default-export */
export const setAuthenticated = (status) => ({
      isAuthenticated: status,
      type: 'SET_IS_AUTHENTICATED',
});
