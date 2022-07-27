import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useEffect, useContext } from "react";
import MaskedInput from "react-text-mask";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { apiViaCep } from "../../api";

const SignupSchema = Yup.object().shape({
  cep: Yup.string()
    .min(8, "Mínimo 8 caracteres")
    .max(9, "Máximo 8 caracteres")
    .required("Campo obrigatório")
});

const cepMask = [
  /[1-9]/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/
];

const Address = () => {
  const { handleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  const buscaCep = async (event, setFieldValue) => {
    const cep = event.target.value;

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
    <div>
      <h1>Cadastrar endereço</h1>
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
          handleSignUp("/endereco/0", values, "Endereço");
        }}
      >

        {({ errors, touched, setFieldValue }) => (
          <Form>
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
            {errors.cep && touched.cep ? <div>{errors.cep}</div> : null}

            <Field name="tipo" placeholder="Tipo" />
            {errors.tipo && touched.tipo ? <div>{errors.tipo}</div> : null}

            <Field name="logradouro" placeholder="Logradouro" />
            {errors.logradouro && touched.logradouro ? <div>{errors.logradouro}</div> : null}

            <Field name="numero" placeholder="Número" />
            {errors.numero && touched.numero ? <div>{errors.numero}</div> : null}

            <Field name="complemento" placeholder="Complemento" />
            {errors.complemento && touched.complemento ? <div>{errors.complemento}</div> : null}

            <Field name="cidade" placeholder="Cidade" />
            {errors.cidade && touched.cidade ? <div>{errors.cidade}</div> : null}

            <Field name="estado" placeholder="Estado" />
            {errors.estado && touched.estado ? <div>{errors.estado}</div> : null}

            <Field name="pais" placeholder="País" />
            {errors.pais && touched.pais ? <div>{errors.pais}</div> : null}

            <button type="submit">Cadastrar</button>
          </Form>
        )}
      </Formik>
    </div >
  )
};

export default Address;
