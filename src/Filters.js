import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear, remove } from './features/filters/filtersSlice'

function Filters() {
  const filters = useSelector(state => state.filters.activeFilters)
  const dispatch = useDispatch()

  if(filters.length === 0) return;
  return (
    <div class="shadow-lg mb-10 flex p-8 justify-between bg-white">
      <div class="flex">
        {filters?.map(filter => 
          <div class="badge-square cursor-pointer ml-5" onClick={() => dispatch(remove({type: filter.type , name:filter.name}))}>
            {filter.name}
          </div>)
        }
      </div>
      <div class="badge-square cursor-pointer" onClick={() => dispatch(clear())}>Clear</div>
    </div>
  )
}

export default Filters