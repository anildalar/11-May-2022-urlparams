import React, { useEffect } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export default function User() {
   //1. State/Hook area

   const [searchParams,setSearchParams] = useSearchParams();

   useEffect(()=>{
       //console.log('hi');
       //let object = new ClassName();

       let object = new URLSearchParams();
       console.log('here is the vlaue ',object.get('id'));
   },[]);

  return (
      <>

        <div>User</div>
        {console.log(searchParams)}
        {console.log(searchParams.get('id'))}
        {console.log(searchParams.get('name'))}
        {searchParams.get('name')}
        {searchParams.get('id')}
        <Outlet />
      </>
  )
}
