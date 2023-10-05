export const passwordExpression = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/;

export const nameExpression = /[a-zA-Za-åa-ö-w-я ]+$/;

export const usernameExpression = /^[a-z0-9._]+$/;

export const unitExpression = /[^0-9.,]/g;

export const numericExpression = /^[0-9]+$/;
