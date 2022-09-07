import React, { useState } from 'react'
import {DragDropContext} from 'react-beautiful-dnd'

const DataInColumns = (props) => {
  const [click, setClick] = useState(false)
  const info = props
  console.log("Hello ",props)
  console.log(props.props[0] +","+ props.props[1])
  const handleClick =()=>{
    setClick(!click)
  }
  return (
    <div className='Container'>
      <DragDropContext>
        <section>
          <span onClick={handleClick}>{info.props[0]}</span>
            {
              click ? <div>
                        {
                          info.props[1].map((p)=>(
                              <p>{p}</p>
                          ))
                        }
                      </div>  : ""
            }
        </section>
      </DragDropContext>
    </div>
  )
}
export default DataInColumns
