import { useState } from 'react'
import BodyPart from './BodyPart'
import Selector from './Selector'
// import data from './data'

function CharacterBuilder() {
  const torsoArr = ['andrew', 'robin', 'jane']
  const headArr = ['andrew', 'robin', 'jane']
  const legArr = ['andrew', 'robin', 'jane']

  const [torsoIndex, setTorsoIndex] = useState(0)
  const [headIndex, setHeadIndex] = useState(0)
  const [legIndex, setLegIndex] = useState(0)

  function handleClick(index: number, arraySelector: string) {
    const newIndex = torsoIndex
    if (arraySelector === 'torso') {
      console.log('Calling for Torso')
      if (torsoIndex === torsoArr.length - 1 && index === 1) {
        console.log(`Changing to 0 index`)

        setTorsoIndex(0)
      } else if (torsoIndex === 0 && index === -1) {
        setTorsoIndex(torsoArr.length - 1)
      } else {
        setTorsoIndex(newIndex + index)
      }
    } else if (arraySelector === 'head') {
      console.log('Calling for Head')
      if (headIndex === headArr.length - 1 && index === 1) {
        console.log(`Changing to 0 index`)

        setHeadIndex(0)
      } else if (headIndex === 0 && index === -1) {
        setHeadIndex(headArr.length - 1)
      } else {
        setHeadIndex(newIndex + index)
      }
    } else {
      console.log('Calling for Legs')
      if (legIndex === legArr.length - 1 && index === 1) {
        console.log(`Changing to 0 index`)

        setLegIndex(0)
      } else if (legIndex === 0 && index === -1) {
        setLegIndex(legArr.length - 1)
      } else {
        setLegIndex(newIndex + index)
      }
    }
    // const bodypartsArr = data.map(item =>
    //     bodypartsArr.push(item.bodypart)
    // )
  }
  return (
    <>
      <h2>Build a Dev Academy Frankenstein</h2>
      {/* {bodypartsArr.map(bodypart => <BodyPart bodypart={"head"}/>)} */}
      <BodyPart bodyPart={'torso'} data={torsoArr} index={torsoIndex} />
      <Selector handleClick={handleClick} bodyPart={'torso'} />
      <BodyPart bodyPart={'head'} data={headArr} index={headIndex} />
      <Selector handleClick={handleClick} bodyPart={'head'} />
      <BodyPart bodyPart={'leg'} data={legArr} index={legIndex} />
      <Selector handleClick={handleClick} bodyPart={'leg'} />
    </>
  )
}

export default CharacterBuilder
