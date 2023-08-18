import PersonCard from './components/PersonCard.jsx';
import './App.css'

function App() {

  return (
    <>
      <div className='persons'>
        <PersonCard firstName={'John'} lastName={'Smith'} age={'88'} hairColor={'Brown'} />
        <PersonCard firstName={'Millard'} lastName={'Fillmore'} age={'50'} hairColor={'Brown'} />
        <PersonCard firstName={'Smith'} lastName={'Maria'} age={'62'} hairColor={'Brown'} />
        <PersonCard firstName={'Jane'} lastName={'Doe'} age={'45'} hairColor={'Black'} />
      </div>
    </>
  )
}

export default App
