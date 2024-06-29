import React from 'react'
import useDebounce from '../../hooks/useDebounce'

function SearchBtn({ updateSearchTerm }) {

  const debounceUpdateSearch = useDebounce((e)=>updateSearchTerm(e.target.value))

  return (
    <>
        <div className='mx-auto'>
            <input 
                type='text' 
                placeholder='Search your pokemon name' 
                className='w-2/5 py-3 px-10 border-2 border-black text-xl'
                onChange={debounceUpdateSearch}
            />
        </div>

    </>
  )
}

export default SearchBtn