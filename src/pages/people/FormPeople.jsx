import MaskedInput from "react-text-mask";
import { useNavigate, useParams } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { Formik, Form, Field } from "formik";
import moment from 'moment';
import * as Yup from "yup";
import { FormDiv, FormItem, ErrorMessage, FormContainer, FormSection, TitleDiv } from "../../components/form/Form";
import { ButtonPrimary, ButtonSecondary } from "../../components/button/Button";
import { useContext, useEffect, useState } from "react";
import { PeopleContext } from "../../context/PeopleContext";
import { apiDbc } from "../../api";
import { Loading } from "../../components/loading/Loading";
import { FormatDateBrToUsa, FormatDateUsaToBr, OnlyNumbers, cpfMask, dateMask } from "../../utils/utils";

const SignupSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  dataNascimento: Yup.string()
    .transform(value => OnlyNumbers(value))
    .min(8, "Mínimo 8 caracteres")
    .max(8, "Máximo 8 caracteres")
    .required("Campo obrigatório")
    .required("Campo obrigatório"),
  cpf: Yup.string()
    .transform(value => OnlyNumbers(value))
    .min(11, "Mínimo 11 caracteres")
    .max(11, "Máximo 11 caracteres")
    .required("Campo obrigatório")
    .required("Campo obrigatório"),
  email: Yup.string()
    .email('Email inválido')
    .required("Campo obrigatório"),
});

const FormPeople = () => {
  const { id } = useParams();
  const { handleCreate, handleUpdate } = useContext(PeopleContext);
  const [pessoa, setPessoa] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const setup = async () => {
    try {
      const { data } = await apiDbc.get(`/pessoa/lista-completa?idPessoa=${id}`);
      setPessoa(data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível encontrar pessoas");
    }
  }

  useEffect(() => {
    id ? setup() : setLoading(false);
  }, []);

  if (loading) {
    return (<Loading></Loading>)
  }

  return (
    <FormContainer>
      <FormSection>
        <TitleDiv>
          <h1>{id ? "Atualizar pessoa" : "Cadastrar pessoa"}</h1>
        </TitleDiv>

        <Formik initialValues={{
          nome: id ? pessoa.nome : "",
          dataNascimento: id ? FormatDateUsaToBr(pessoa.dataNascimento) : "",
          cpf: id ? OnlyNumbers(pessoa.cpf) : "",
          email: id ? pessoa.email : "",
        }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            values.dataNascimento = FormatDateBrToUsa(values.dataNascimento);
            values.cpf = OnlyNumbers(values.cpf);
            if (moment(values.dataNascimento).isValid()) {
              id ? handleUpdate(values, id) : handleCreate(values);
              resetForm({ value: "" });
              setTimeout(() => { navigate("/pessoas") }, 1000)
            }
            else {
              toast.error("Insira uma data válida");
            }
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
                  <Field name="dataNascimento" >
                    {({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={dateMask}
                        placeholder="Data de nascimento"
                        type="text"
                      />
                    )}
                  </Field>
                  {errors.dataNascimento && touched.dataNascimento ? (
                    <ErrorMessage>{errors.dataNascimento}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <Field name="cpf"  >
                    {({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={cpfMask}
                        placeholder="CPF"
                        type="text"
                      />
                    )}

                  </Field>
                  {errors.cpf && touched.cpf ? (
                    <ErrorMessage>{errors.cpf}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <Field name="email" placeholder="Email" type="email" />
                  {errors.email && touched.email ? (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <div>
                    <ButtonSecondary type="button" padding={"12px 32px"} onClick={() => navigate('/pessoas')}>Cancelar</ButtonSecondary>

                    <ButtonPrimary type="submit" padding={"12px 32px"}>{id ? "Atualizar" : "Cadastrar"}</ButtonPrimary>
                  </div>
                </FormItem>

              </FormDiv>
            </Form>
          )}
        </Formik>

      </FormSection>
      <Toaster />
    </FormContainer >
  )
}
export default FormPeople;