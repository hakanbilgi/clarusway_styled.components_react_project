
import content from "../data"
const Card = () => {


  return (
  <>
  {content.map((item)=> {
    const {id,body,image,title} = item;
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h4></h4>
                <p></p>
            </div>
        </div>
    )
  })}
  </>
  )
}

export default Card