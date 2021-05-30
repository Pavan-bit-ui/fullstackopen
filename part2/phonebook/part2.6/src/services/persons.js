import axios from "axios";
const baseUrl = "http://localhost:3001/persons";
//const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
};



const logger = {
    getAll: getAll,
  create: create,
  
  };
  export default logger;