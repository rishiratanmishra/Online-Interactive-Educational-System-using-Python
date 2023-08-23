
import React from 'react'

const AboutCards = ({cardHead,cardPara}) => {
  return (
    <>
<div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6  flex flex-col gap-2">
            <h2 className="text-lg sm:text-xl text-yellow-600 font-medium title-font mb-2">{cardHead}</h2>
            <p className="leading-relaxed text-base mb-4">
            {cardPara}
            </p>

          </div>


               
    </>
  )
}

export default AboutCards