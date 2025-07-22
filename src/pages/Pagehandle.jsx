import React from 'react'

function Pagehandle({handlePrev,handleNext,page}) {
  return (
    <div className='pagebox'>
      <div onClick={handlePrev} className="leftarrow"><i className="fa-solid fa-arrow-left"></i></div>
      <div className="page">{page}</div>
      <div onClick={handleNext} className="rightarrow"><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagehandle
