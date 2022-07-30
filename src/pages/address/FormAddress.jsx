import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useEffect, useContext } from "react";
import MaskedInput from "react-text-mask";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { apiViaCep } from "../../api";
import { cepMask } from "../../utils/masks";
import { FormContainer, FormDiv, FormItem, FormSection, TitleDiv } from "../../components/form/Form";
import { ButtonPrimary, ButtonSecondary } from "../../components/button/Button";
import { OnlyNumbers } from "../../utils/utils";
import { ErrorMessage } from "../../components/form/Form";

const SignupSchema = Yup.object().shape({
  cep: Yup.string()
    .transform(value => OnlyNumbers(value))
    .min(8, "Mínimo 8 caracteres")
    .max(9, "Máximo 8 caracteres")
    .required("Campo obrigatório"),
  tipo: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  logradouro: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  numero: Yup.string()
    .min(1, "Mínimo 1 caractere")
    .max(10, "Máximo 10 caracteres")
    .required("Campo obrigatório"),
  complemento: Yup.string()
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  cidade: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  estado: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  pais: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
});

const FormAddress = () => {
  const { handleRegister } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  const buscaCep = async (event, setFieldValue) => {
    const cep = OnlyNumbers(event.target.value);

    try {
      const { data } = await apiViaCep.get(`/ws/${cep}/json`)
      setFieldValue("logradouro", data.logradouro)
      setFieldValue("complemento", data.complemento)
      setFieldValue("cidade", data.localidade)
      setFieldValue("estado", data.uf)
    } catch (error) {
      alert("CEP inválido")
    }
  }

  return (
    <FormContainer>
      <FormSection>
        <TitleDiv>
          <h1>Cadastrar endereço</h1>
        </TitleDiv>
        <Formik
          initialValues={{
            idPessoa: 0,
            tipo: "",
            logradouro: "",
            numero: "",
            complemento: "",
            cep: "",
            cidade: "",
            estado: "",
            pais: "Brasil"
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleRegister(`/endereco/${1}`, values, "Endereço", "post");
          }}
        >

          {({ errors, touched, setFieldValue }) => (
            <Form>
              <FormDiv>
                <FormItem>
                  <Field name="cep">
                    {({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={cepMask}
                        placeholder="Digite o cep"
                        type="text"
                        onBlur={(event) => buscaCep(event, setFieldValue)}
                      />
                    )}

                  </Field>
                  {errors.cep && touched.cep ? <ErrorMessage>{errors.cep}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <Field name="tipo" placeholder="Tipo" />
                  {errors.tipo && touched.tipo ? <ErrorMessage>{errors.tipo}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <Field name="logradouro" placeholder="Logradouro" />
                  {errors.logradouro && touched.logradouro ? <ErrorMessage>{errors.logradouro}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <Field name="numero" placeholder="Número" />
                  {errors.numero && touched.numero ? <ErrorMessage>{errors.numero}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <Field name="complemento" placeholder="Complemento" />
                  {errors.complemento && touched.complemento ? <ErrorMessage>{errors.complemento}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <Field name="cidade" placeholder="Cidade" />
                  {errors.cidade && touched.cidade ? <ErrorMessage>{errors.cidade}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <Field name="estado" placeholder="Estado" />
                  {errors.estado && touched.estado ? <ErrorMessage>{errors.estado}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <Field name="pais" placeholder="País" />
                  {errors.pais && touched.pais ? <ErrorMessage>{errors.pais}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <div>
                    <ButtonSecondary type="button" padding={"12px 32px"} onClick={() => window.location.href = '/pessoas'}>Cancelar</ButtonSecondary>

                    <ButtonPrimary padding={"16px 32px"} type="submit">Cadastrar</ButtonPrimary>
                  </div>
                </FormItem>
              </FormDiv>
            </Form>
          )}
        </Formik>

      </FormSection>
    </FormContainer>

  )
};

export default FormAddress;
