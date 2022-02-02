import { Form, StyledContainer } from './auth.styles';

function Auth() {
  return <div></div>;
}

Auth.Container = function AuthContainer({ children, ...restProps }: any) {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

Auth.Form = function AuthForm({ children, ...restProps }: any) {
  return <Form {...restProps}>{children}</Form>;
};

export default Auth;
