import { useState } from 'react'
import BodyPart from './BodyPart'
import Selector from './Selector'
// import data from './data'

function CharacterBuilder() {
  const torsoArr = ['andrew', 'robin', 'jane']

  const [torsoIndex, setTorsoIndex] = useState(0)

  function handleClick(index: number) {
    const newIndex = torsoIndex
    console.log(`I was clicked with ${index}`);
    
    if (torsoIndex === torsoArr.length - 1 && index === 1) {
      
      
      console.log(`Changing to 0 index`);
      
      setTorsoIndex(0)
    } else if (torsoIndex === 0 && index === -1){
      console.log(`Changing to ${newIndex+index} index`);
      setTorsoIndex(torsoArr.length-1)
    } else {
      console.log(`Changing to ${newIndex+index} index`);
      setTorsoIndex(newIndex + index)
    }
    console.log(`After setTorsoIndex `,torsoIndex);
    

    // const bodypartsArr = data.map(item =>
    //     bodypartsArr.push(item.bodypart)
    // )

  }
  return (
    <>
      <h2>Build a Dev Academy Frankenstein</h2>
      {/* {bodypartsArr.map(bodypart => <BodyPart bodypart={"head"}/>)} */}
      <BodyPart bodyPart={'torso'} data={torsoArr} index={torsoIndex} />
      <Selector handleClick={handleClick}/>
    </>
  )
}

export default CharacterBuilder
