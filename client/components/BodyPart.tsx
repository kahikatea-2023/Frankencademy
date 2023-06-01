interface Props {
  bodyPart: string
  data: string[]
  index: number
}

function BodyPart(props: Props) {
  return (
    <div className="bodyPart">
      <p>I&apos;m a {props.data[props.index]} body part</p>
    </div>
  )
}

export default BodyPart
