import { Data } from '../data/data'

interface Props {
  bodyPart: string
  data: Data[]
  index: number
}

function BodyPart(props: Props) {
  return (
    <>
      {console.log(`${props.data[props.index].path}`)}

      <div className="bodyPart">
        <img
          className={`${props.data[props.index].bodyPart}Img`}
          src={`client/${props.data[props.index].path}`}
          alt={`${props.data[props.index].person} ${
            props.data[props.index].bodyPart
          }`}
        />
        {/* <p>
          {props.data[props.index].person} {props.data[props.index].bodyPart}
        </p> */}
      </div>
    </>
  )
}

export default BodyPart
