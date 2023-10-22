import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
        <div className='border-2 border-red-500 padding-container max-container w-full pb-24'>
          <Image src="/camp.svg" alt="camp"width={50} height={50} />
          <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
            We are here for you !
          </p>
          <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
              <h2>Guide you to easy path</h2>
              <p>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
          </div>
        </div>
    </section>
  )
}

export default Guide