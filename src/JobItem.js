import React from 'react'
import { useDispatch } from 'react-redux'
import {add} from './features/filters/filtersSlice'
function JobItem({data: {
  company, contract, featured, languages, level, location,new: isNew, logo, position, postedAt, role, tools
}}) {
  const dispatch = useDispatch()
  console.log(logo)

  return (
    <div class="border-l-4 border-sky-600 rounded  flex shadow-lg justify-between p-6 mb-10 bg-white">
      <div class="flex">
        <img class="mr-6" src={require(`${logo}`)} alt="logo" />
        <div class="flex flex-col justify-between">
          <div class="flex">
            <span class="mr-2 flex flex-col justify-center items-center leading-6 text-cyan-600 font-bold">{company}</span>
            {isNew ? (<span class="badge-primary ml-1">NEW!</span>
) : ""}
            {featured ? (<span class="badge-bold ml-1">FEATURED</span>
) : ""}
          </div>
          <div class="text-left font-bold text-slate-700">
            {position}
          </div>    
          <ul class="flex flex-row justify-between text-slate-500 font-semibold">
            <li class="mr-3">{postedAt}</li>
            <li class="mr-3">{contract}</li>
            <li class="mr-3">{location}</li>
          </ul> 
        </div>
      </div>
      <div class="grow flex justify-end items-center">
          <div class="flex justify-center items-center">
            <span onClick={() => dispatch(add({type: 'role', name: role}))} class="badge-square ml-3 cursor-pointer">{role}</span>
            <span onClick={() => dispatch(add({type: 'level', name: level}))} class="badge-square ml-3 cursor-pointer">{level}</span>
            {languages.map(language => <span key={language} onClick={() => dispatch(add({type: 'language', name: language}))} class="badge-square ml-3 cursor-pointer">{language}</span>)}
          </div>
      </div>
    </div>
  )
}

export default JobItem