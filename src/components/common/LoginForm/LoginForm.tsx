import React from 'react';

export interface LoginFormProps {}

export const LoginForm = ({ ...props }: LoginFormProps) => {
  return <div {...props}>Login Form</div>;
};
