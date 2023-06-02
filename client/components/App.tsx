import CharacterBuilder from './CharacterBuilder'
import Audio from './Audio'
import Fire from './Fire'

function App() {
  return (
    <>
      <Audio />
      <div>
        <h2 className="title">Frankencademy</h2>
        {/* <p>Build-a-coder</p> */}
        <CharacterBuilder />
        <Fire />
      </div>
    </>
  )
}

export default App
