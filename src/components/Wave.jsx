import React from 'react'

const Wave = () => {
  return (
    <div>
      <div className="lg:hidden w-full h-24 -mt-5 bg-waveMobile wavy" />
      <div className="hidden lg:flex w-full h-24 bg-wave wavy"/>
      {/* <div className="hidden lg:flex lg:absolute top-[2400px] w-full h-24 bg-wave wavvyy"/> */}
    </div>
  )
}

export default Wave