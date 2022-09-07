import React from 'react'

const TableInstance = (props) => {
  const ColsData = props;
  return (
    <div>
        <table className='TableContainer'>
            <thead>
                <tr>
                    <th>{ColsData.props[0]}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    {
                        ColsData.props[1].map((p)=>(
                            <p>{p}</p>
                        ))
                    }
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableInstance
