import React from 'react'

function SearchBtn() {
  return (
    <>
        <div className='mx-auto'>
            <input 
                type='text' 
                placeholder='Search your pokemon name' 
                className='w-2/5 py-3 px-10 border-2 border-black text-xl'
            />
        </div>

    </>
  )
}

export default SearchBtn