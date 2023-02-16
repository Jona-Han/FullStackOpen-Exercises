import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Numbers from './components/Numbers.js'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [peopleToShow, setToShow] = useState([])

  useEffect(() => {
    personsService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons)
        setToShow(allPersons)
      })
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter persons={persons} setToShow={setToShow} />
      <h2>Add a new contact</h2>
      <PersonForm persons={persons} setPersons={setPersons} setToShow={setToShow} />
      <h2>Numbers</h2>
      <Numbers people={peopleToShow} setPersons={setPersons} setToShow={setToShow} />
    </div>
  )
}
export default App