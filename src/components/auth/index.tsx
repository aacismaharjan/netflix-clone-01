import { Form, StyledContainer, StyledLoader } from './auth.styles';

function Auth() {
  return <div></div>;
}

Auth.Loader = function AuthLoader({ children, ...restProps }: any) {
  return <StyledLoader {...restProps}>{children}</StyledLoader>;
};

Auth.Container = function AuthContainer({ children, ...restProps }: any) {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

Auth.Form = function AuthForm({ children, ...restProps }: any) {
  return <Form {...restProps}>{children}</Form>;
};

export default Auth;
