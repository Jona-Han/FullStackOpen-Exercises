import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const response = axios.get(baseUrl)
    return response.then(response => response.data)
}

const create = newPerson => {
    const response = axios.post(baseUrl, newPerson)
    return response.then(response => response.data)
}

const remove = id => {
    const response = axios.delete(`${baseUrl}/${id}`)
    return response.then(response => response.data)
}

const update = (newPerson) => {
    const response = axios.put(`${baseUrl}/${newPerson.id}`, newPerson)
    return response.then(response => response.data)
}


export default { getAll, create, remove, update }