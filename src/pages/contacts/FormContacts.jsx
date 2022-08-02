import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import toast, { Toaster } from 'react-hot-toast';
import { OnlyNumbers, telefoneMask } from "../../utils/utils";
import { apiDbc } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Loading } from "../../components/loading/Loading";
import { ErrorMessage, FormContainer, FormDiv, FormItem, FormSection, TitleDiv } from "../../components/form/Form";
import { ContactsContext } from "../../context/ContactsContext";
import { ButtonPrimary, ButtonSecondary } from "../../components/button/Button";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const ContactSchema = Yup.object().shape({
  telefone: Yup.string()
    .transform(value => OnlyNumbers(value))
    .min(10, "Mínimo 10 números")
    .max(11, "Máximo 11 números")
    .required("Campo obrigatório"),
  tipoContato: Yup.string()
    .required("Campo obrigatório"),
  descricao: Yup.string()
    .max(20, "Máximo 20 caracteres")
    .required("Campo obrigatório"),
});

const FormContacts = () => {
  const { handleCreate, handleUpdate } = useContext(ContactsContext);
  const { idPerson, idContact } = useParams();
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState({});
  const navigate = useNavigate();

  const setup = async () => {
    try {
      const { data } = await apiDbc.get(`/contato/${idPerson}`);
      const contatoFilter = data.find((contato) => contato.idContato === parseInt(idContact));
      setContact(contatoFilter);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível encontrar o contato");
    }
  }

  useEffect(() => {
    idContact ? setup() : setLoading(false);
  }, []);

  if (loading) {
    return (<Loading></Loading>)
  }

  return (
    <FormContainer>
      <FormSection>
        <TitleDiv>
          <h1>{idContact ? "Atualizar contato" : "Cadastrar contato"}</h1>
        </TitleDiv>
        <Formik initialValues={{
          idPessoa: idPerson,
          tipoContato: idContact ? contact.tipoContato : "",
          telefone: idContact ? contact.telefone : "",
          descricao: idContact ? contact.descricao : "",
        }}
          validationSchema={ContactSchema}
          onSubmit={(values, { resetForm }) => {
            values.telefone = OnlyNumbers(values.telefone);
            idContact ? handleUpdate(values, idContact, idPerson) : handleCreate(values, idPerson);
            resetForm({ value: "" });
          }}
        >
          {({ errors, touched }) =>
          (
            <Form>
              <FormDiv>
                <FormItem>
                  <Field name="telefone">
                    {({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={telefoneMask}
                        placeholder="Telefone"
                        type="text"
                      />
                    )}

                  </Field>
                  {errors.telefone && touched.telefone ? <ErrorMessage>{errors.telefone}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <Field name="descricao" placeholder="Descrição">
                  </Field>
                  {errors.descricao && touched.descricao ? <ErrorMessage>{errors.descricao}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <Field
                    component="select"
                    name="tipoContato"
                    multiple={false}
                  >
                    <option value="" defaultValue hidden>Selecione o tipo do contato</option>
                    <option value="RESIDENCIAL">Residencial</option>
                    <option value="COMERCIAL">Comercial</option>
                  </Field>
                  {errors.tipoContato && touched.tipoContato ? <ErrorMessage>{errors.tipoContato}</ErrorMessage> : null}
                </FormItem>

                <FormItem>
                  <div>
                    <ButtonSecondary type="button" padding={"12px 32px"} onClick={() => navigate(`/contatos/${idPerson}`)}>Cancelar</ButtonSecondary>

                    <ButtonPrimary type="submit" padding={"16px 32px"} >{idContact ? "Atualizar" : "Cadastrar"}</ButtonPrimary>
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
export default FormContacts
