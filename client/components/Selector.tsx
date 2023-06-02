interface Props {
  handleClick: (index: number, arraySelector: string) => void
  bodyPart: string
}
function Selector(props: Props) {
  return (
    <div className="selector">
      <p className="buttonP">I&apos;m the {props.bodyPart} selector</p>
      <button onClick={() => props.handleClick(-1, props.bodyPart)}>
        Left
      </button>
      <button onClick={() => props.handleClick(1, props.bodyPart)}>
        Right
      </button>
    </div>
  )
}

export default Selector
