import { useState } from 'react'
import BodyPart from './BodyPart'
import Selector from './Selector'
import data from '../data/data'
import { log } from 'console'

function CharacterBuilder() {
  const bodyPartArr = ['Torso', 'Head', 'Legs']
  const torsoArr = data.filter((item) => item.bodyPart === 'Torso')

  const headArr = data.filter((item) => item.bodyPart === 'Head')
  const legArr = data.filter((item) => item.bodyPart === 'Legs')



  const [torsoIndex, setTorsoIndex] = useState(0)
  const [headIndex, setHeadIndex] = useState(0)
  const [legIndex, setLegIndex] = useState(0)

  function handleClick(index: number, arraySelector: string) {
    console.log(index,arraySelector);
    
    if (arraySelector === 'torso') {
      const newIndex = torsoIndex
      // console.log('Calling for Torso')
      if (torsoIndex === torsoArr.length - 1 && index === 1) {
        // console.log(`Changing to 0 index`)

        setTorsoIndex(0)
      } else if (torsoIndex === 0 && index === -1) {
        setTorsoIndex(torsoArr.length - 1)
      } else {
        setTorsoIndex(newIndex + index)
      }
    } else if (arraySelector === 'head') {
      const newIndex = headIndex
      console.log(headIndex);
      
      // console.log('Calling for Head')
      if (headIndex === headArr.length - 1 && index === 1) {
        // console.log(`Changing to 0 index`)

        setHeadIndex(0)
      } else if (headIndex === 0 && index === -1) {
        setHeadIndex(headArr.length - 1)
      } else {
        setHeadIndex(newIndex + index)
      }
    } else {
      // console.log('Calling for Legs')
      const newIndex = legIndex
      if (legIndex === legArr.length - 1 && index === 1) {
        // console.log(`Changing to 0 index`)

        setLegIndex(0)
      } else if (legIndex === 0 && index === -1) {
        setLegIndex(legArr.length - 1)
      } else {
        setLegIndex(newIndex + index)
      }
    }
  
  }
  return (
    <>
      <h2>Build a Dev Academy Frankenstein</h2>
      <div className="builder">
        {/* {bodypartsArr.map(bodypart => <BodyPart bodypart={"head"}/>)} */}
        <div className="bodyContainer">

          
          <div className="head">
            <BodyPart bodyPart={'head'} data={headArr} index={headIndex} />
          </div>
          <div className="torso">
            <BodyPart bodyPart={'torso'} data={torsoArr} index={torsoIndex} />
          </div>
          <div className="legs">
            <BodyPart bodyPart={'leg'} data={legArr} index={legIndex} />
          </div>
        </div>

        <div className="button">
          <Selector handleClick={handleClick} bodyPart={'head'} />
          <Selector handleClick={handleClick} bodyPart={'torso'} />
          <Selector handleClick={handleClick} bodyPart={'leg'} />
        </div>
        
      </div>
    </>
  )
}

export default CharacterBuilder
