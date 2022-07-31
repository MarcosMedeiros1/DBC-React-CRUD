import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import MaskedInput from "react-text-mask";
import { useNavigate, useParams } from "react-router-dom";
import { apiDbc, apiViaCep } from "../../api";
import { cepMask, OnlyNumbers } from "../../utils/utils";
import { FormContainer, FormDiv, FormItem, FormSection, TitleDiv } from "../../components/form/Form";
import { ButtonPrimary, ButtonSecondary } from "../../components/button/Button";
import { ErrorMessage } from "../../components/form/Form";
import { AddressContext } from "../../context/AddressContext";
import { Loading } from "../../components/loading/Loading";

const SignupSchema = Yup.object().shape({
  cep: Yup.string()
    .transform(value => OnlyNumbers(value))
    .min(8, "Mínimo 8 caracteres")
    .max(9, "Máximo 8 caracteres")
    .required("Campo obrigatório"),
  tipo: Yup.string()
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
  const { handleCreate, handleUpdate } = useContext(AddressContext);
  const { idPerson, idAddress } = useParams();
  const navigate = useNavigate();
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(true);

  const setup = async () => {
    try {
      const { data } = await apiDbc.get(`/endereco/${idAddress}`);
      setAddress(data);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    idAddress ? setup() : setLoading(false);
  }, []);

  const buscaCep = async (event, setFieldValue) => {
    const cep = OnlyNumbers(event.target.value);

    if (cep.length !== 8) {
      alert("CEP inválido");
      return;
    }

    try {
      const { data } = await apiViaCep.get(`/ws/${cep}/json`)
      if (data.erro === "true") {
        alert("CEP inválido");
        return;
      }

      setFieldValue("logradouro", data.logradouro)
      setFieldValue("complemento", data.complemento)
      setFieldValue("cidade", data.localidade)
      setFieldValue("estado", data.uf)
    } catch (error) {
      alert("CEP inválido");
    }

  }

  if (loading) {
    return (<Loading></Loading>)
  }

  return (
    <FormContainer>
      <FormSection>
        <TitleDiv>
          <h1>{idAddress ? "Atualizar endereço" : "Cadastrar endereço"}</h1>
        </TitleDiv>
        <Formik
          initialValues={{
            idPessoa: idPerson,
            tipo: idAddress ? address.tipo : "",
            logradouro: idAddress ? address.logradouro : "",
            numero: idAddress ? address.numero : "",
            complemento: idAddress ? address.complemento : "",
            cep: idAddress ? address.cep : "",
            cidade: idAddress ? address.cidade : "",
            estado: idAddress ? address.estado : "",
            pais: idAddress ? address.pais : ""
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            values.cep = OnlyNumbers(values.cep);
            idAddress ? handleUpdate(values, idAddress, idPerson) : handleCreate(values);
            resetForm({ value: "" });
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
                  <Field
                    component="select"
                    name="tipo"
                    multiple={false}
                  >
                    <option value="" disabled defaultValue hidden>Selecione</option>
                    <option value="RESIDENCIAL">Residencial</option>
                    <option value="COMERCIAL">Comercial</option>
                  </Field>
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
                    <ButtonSecondary type="button" padding={"12px 32px"} onClick={() => navigate(`/enderecos/${idPerson}`)}>Cancelar</ButtonSecondary>

                    <ButtonPrimary padding={"16px 32px"} type="submit">{idAddress ? "Atualizar" : "Cadastrar"}</ButtonPrimary>
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
