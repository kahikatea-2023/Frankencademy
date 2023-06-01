interface Props{
  handleClick: (index: number) => void
}
function Selector(props : Props) {
  return (
  
  <div className="selector">
    <p>I&apos;m the selector</p>
    <button onClick={() => props.handleClick(-1)}>Left</button>
    <button onClick={() => props.handleClick(1)}>Right</button>
  </div>
  )
}

export default Selector