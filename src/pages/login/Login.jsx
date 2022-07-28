import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Title, Container, FormDiv, FormItem, SubTitle, TitleDiv, ErrorMessage, LoginDiv } from "./Login.styled";

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  senha: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
});

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  return (
    <Container>
      <LoginDiv>

        <TitleDiv>
          <Title>Realizar login</Title>
          <SubTitle>Informe seu login e senha abaixo</SubTitle>
        </TitleDiv>
        <Formik
          initialValues={{
            login: "",
            senha: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormDiv>
                <FormItem>
                  <label htmlFor="login">LOGIN</label>
                  <Field name="login" placeholder="Login" />
                  {errors.login && touched.login ? <ErrorMessage>{errors.login}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <label htmlFor="senha">SENHA</label>
                  <Field type="password" name="senha" placeholder="Senha" />
                  {errors.senha && touched.senha ? <ErrorMessage>{errors.senha}</ErrorMessage> : null}
                </FormItem>

                <button type="submit">Entrar</button>
              </FormDiv>
            </Form>
          )}
        </Formik>
      </LoginDiv>
    </Container>
  );
};

export default Login;
