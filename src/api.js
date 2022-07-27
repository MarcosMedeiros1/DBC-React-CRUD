import axios from "axios";

const apiDbc = axios.create({
  baseURL: "https://dbc-pessoa-api.herokuapp.com",
});

const apiViaCep = axios.create({
  baseURL: "https://viacep.com.br",
});

export { apiDbc, apiViaCep };
