import { useContext, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { apiDbc } from "../../api";
import { AuthContext } from "../../context/AuthContext";
import Modal from "../../components/modal/Modal"

const SignupSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  dataNascimento: Yup.string()
    .min(8, "Mínimo 8 caracteres")
    .max(50, "Máximo 8 caracteres")
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

const People = () => {
  const { handleRegister } = useContext(AuthContext);
  const [pessoas, setPessoas] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [method, setMethod] = useState("post");
  const [link, setLink] = useState("/pessoa");
  const [idPessoa, setIdPessoa] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const setup = async () => {
    try {
      const { data } = await apiDbc.get("/pessoa?pagina=0&tamanhoDasPaginas=20");

      setPessoas(data.content);

    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    setup();
  }, [])

  const handleDeletar = async (idPessoa) => {
    try {
      await apiDbc.delete(`/pessoa/${idPessoa}`);
      alert("Pessoa deletada com sucesso")
    } catch (error) {
      alert(error)
    }
  }

  const handleEditar = (nome, dataNascimento, cpf, email, idPessoa, setFieldValue) => {
    setIsUpdate(true);
    setMethod("put");
    setFieldValue("nome", nome);
    setFieldValue("dataNascimento", dataNascimento);
    setFieldValue("cpf", cpf);
    setFieldValue("email", email);
    setFieldValue("idPessoa", idPessoa);
    setLink(`/pessoa/${idPessoa}`);
  }

  return (
    <div>
      {isModalVisible &&
        <Modal
          onCancel={() => setIsModalVisible(false)}
          onConfirm={() => { handleDeletar(idPessoa); setIsModalVisible(false) }}>
          <h2>Confirmar exclusão?</h2>
        </Modal>
      }

      <Formik initialValues={{
        nome: "",
        dataNascimento: "",
        cpf: "",
        email: ""
      }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          handleRegister(link, values, "Pessoa", method);
          setIsUpdate(false);
          setMethod("post");
          resetForm({ value: "" })
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <Field name="nome" placeholder="Nome" />
            {errors.nome && touched.nome ? (
              <div>{errors.nome}</div>
            ) : null}

            <Field name="dataNascimento" placeholder="Data de nascimento" />
            {errors.dataNascimento && touched.dataNascimento ? (
              <div>{errors.dataNascimento}</div>
            ) : null}

            <Field name="cpf" placeholder="CPF" />
            {errors.cpf && touched.cpf ? (
              <div>{errors.cpf}</div>
            ) : null}

            <Field name="email" placeholder="Email" />
            {errors.email && touched.email ? (
              <div>{errors.email}</div>
            ) : null}

            <button type="submit">{isUpdate ? "Atualizar" : "Cadastrar"}</button>

            {pessoas.map(pessoa => (
              <div key={pessoa.idPessoa}>
                <p>Nome: {pessoa.nome}</p>
                <p>Data de nascimento: {pessoa.dataNascimento}</p>
                <p>CPF: {pessoa.cpf}</p>
                <p>Email: {pessoa.email}</p>

                <button type="button" onClick={() => { setIsModalVisible(true); setIdPessoa(pessoa.idPessoa) }}>Excluir</button>
                <button type="button" onClick={() => handleEditar(pessoa.nome, pessoa.dataNascimento, pessoa.cpf, pessoa.email, pessoa.idPessoa, setFieldValue)}>Editar</button>
              </div>
            ))}

          </Form>
        )}
      </Formik>
    </div >
  )
}

export default People;