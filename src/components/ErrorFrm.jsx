import React from 'react'

const ErrorFrm = ({mensaje}) => {
  return (
   <div>
      <p className='bg-red-500 text-center mt-2 rounded-2xl p-1 font-bold text-white'>{mensaje}</p>
   </div>
  )
}

export default ErrorFrm