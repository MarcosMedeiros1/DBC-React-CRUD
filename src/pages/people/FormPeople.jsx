import { useParams } from "react-router-dom"
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormDiv, FormItem, ErrorMessage } from "../../styles/FormDefault.styled";
import { ButtonPrimary } from "../../components/button/Button";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PeopleContext } from "../../context/PeopleContext";
import { apiDbc } from "../../api";
import { Loading } from "../../components/loading/Loading";

const SignupSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  dataNascimento: Yup.string()
    .min(10, "Mínimo 8 caracteres")
    .max(10, "Máximo 8 caracteres")
    .required("Campo obrigatório")
    .required("Campo obrigatório"),
  cpf: Yup.string()
    .min(1, "Mínimo 11 caracteres")
    .max(11, "Máximo 11 caracteres")
    .required("Campo obrigatório")
    .required("Campo obrigatório"),
  email: Yup.string()
    .email('Email inválido')
    .required("Campo obrigatório"),
});

const FormPeople = () => {
  const { id } = useParams();
  const { handleRegister } = useContext(AuthContext);
  const { method, setMethod } = useContext(PeopleContext);
  const [pessoa, setPessoa] = useState({});
  const [endpoint, setEndpoint] = useState("/pessoa");
  const [loading, setLoading] = useState(true);

  const setup = async () => {
    try {
      const { data } = await apiDbc.get(`/pessoa/lista-completa?idPessoa=${id}`);
      setPessoa(data[0]);
      setLoading(false);
      setMethod("put");
      setEndpoint(`/pessoa/${id}`);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    id ? setup() : setLoading(false);
  }, []);

  if (loading) {
    return (<Loading></Loading>)
  }

  return (
    <div>
      <Formik initialValues={{
        nome: id ? pessoa.nome : "",
        dataNascimento: id ? pessoa.dataNascimento : "",
        cpf: id ? pessoa.cpf : "",
        email: id ? pessoa.email : "",
      }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          handleRegister(endpoint, values, "Pessoa", method);
          setMethod("post");
          resetForm({ value: "" })
          window.location.href = "/pessoas"; // Problema ao editar pessoa (não edita da primeira vez)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <FormDiv>
              <FormItem>
                <Field name="nome" placeholder="Nome" />
                {errors.nome && touched.nome ? (
                  <ErrorMessage>{errors.nome}</ErrorMessage>
                ) : null}
              </FormItem>

              <FormItem>
                <Field name="dataNascimento" placeholder="Data de nascimento" />
                {errors.dataNascimento && touched.dataNascimento ? (
                  <ErrorMessage>{errors.dataNascimento}</ErrorMessage>
                ) : null}
              </FormItem>

              <FormItem>
                <Field name="cpf" placeholder="CPF" />
                {errors.cpf && touched.cpf ? (
                  <ErrorMessage>{errors.cpf}</ErrorMessage>
                ) : null}
              </FormItem>

              <FormItem>
                <Field name="email" placeholder="Email" />
                {errors.email && touched.email ? (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                ) : null}
              </FormItem>

              <FormItem>
                <ButtonPrimary padding={"16px 32px"}>{id ? "Atualizar" : "Cadastrar"}</ButtonPrimary>
              </FormItem>

            </FormDiv>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default FormPeople;