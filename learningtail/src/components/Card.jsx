import React from 'react'

function Card({subName,btnText="Click me"}) {
    
  return (
    <>
        <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
            <div className=" bg-black sm:p-10 p-6 rounded-xl">
              <div className="">
                <h5 className="text-xl font-bold text-gray-200">Science of {subName}</h5>
      
                <p className="mt-2 text-sm text-gray-400">
                  {btnText}
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Card