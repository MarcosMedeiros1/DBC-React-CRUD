import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FormContainer, FormSection, TitleDiv, Title, SubTitle, FormDiv, FormItem, ErrorMessage } from "../../components/form/Form";
import { ButtonPrimary } from "../../components/button/Button";
import { Link } from "react-router-dom";

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
    <>
      <FormContainer>
        <FormSection>

          <TitleDiv>
            <h1>Realizar login</h1>
            <SubTitle>Informe seu login e senha abaixo</SubTitle>
          </TitleDiv>
          <Formik
            initialValues={{
              login: "",
              senha: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              handleLogin(values);
              resetForm({ value: "" });
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

                  <ButtonPrimary padding={"16px 32px"} type="submit">Entrar</ButtonPrimary>
                  <span>Não possui uma conta? <Link to={"/cadastrar-usuario"}>Cadastrar</Link></span>
                </FormDiv>
              </Form>
            )}
          </Formik>
        </FormSection>
      </FormContainer >
    </>
  );
};

export default Login;
