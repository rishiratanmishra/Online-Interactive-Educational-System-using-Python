import Card from '../DevCard/DevCard'
import React from 'react'
import Rishi from '/public/rishi.jpg'
import Gaurav from '/public/gaurav.png'
import Barun from '/public/barun.jpeg'
import Shivam from '/public/shivam.jpeg'
const Developer = () => {
  return (
    <>
      
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Developers
      </p>




<section className='p-4 sm:p-8'>

      <div className='flex flex-wrap mt-8 justify-center gap-8  rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2'>
      <Card
    Link1Link={"https://founder.zolaha.com"}
    Link2Link={"https://instagram.com/rishiratanmishra"}
    Link3Link={"#"}
    Link1={"Portfolio"}
    Link2={"Instagram"}
    // Link3={"#"}
    Linkedin={"Follow"}
    LinkedinLink={"#"}
    WhatsappLink={"#"}
        DeveloperName={"Rishi Ratan Mishra" }
        DeveloperPost={"Web Developer" }
        DeveloperImage={Rishi}
      />

      <Card
    Link1Link={"https://founder.zolaha.com"}
    Link2Link={"https://instagram.com/rishiratanmishra"}
    Link3Link={"#"}
    Link1={"Portfolio"}
    Link2={"Instagram"}
    // Link3={"#"}
    Linkedin={"Follow"}
    LinkedinLink={"#"}
    Whatsapp={"Message"}
    WhatsappLink={"#"}
        DeveloperName={"Gaurav Kumar Jha" }
        DeveloperPost={"Web Developer" }
        DeveloperImage={Gaurav}
      />

      </div>

      <div className='flex mt-8 flex-wrap justify-center gap-8  rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2'>
      <Card
    Link1Link={"https://founder.zolaha.com"}
    Link2Link={"https://instagram.com/rishiratanmishra"}
    Link3Link={"#"}
    Link1={"Portfolio"}
    Link2={"Instagram"}
    // Link3={"#"}
    Linkedin={"Follow"}
    LinkedinLink={"#"}
    Whatsapp={"Message"}
    WhatsappLink={"#"}
        DeveloperName={"Barun Kumar" }
        DeveloperPost={"Web Developer" }
        DeveloperImage={Barun}
      />

      <Card
    Link1Link={"https://founder.zolaha.com"}
    Link2Link={"https://instagram.com/rishiratanmishra"}
    Link3Link={"#"}
    Link1={"Portfolio"}
    Link2={"Instagram"}
    // Link3={"#"}
    Linkedin={"Follow"}
    LinkedinLink={"#"}
    Whatsapp={"Message"}
    WhatsappLink={"#"}
        DeveloperName={"Shivam Vidya Sah" }
        DeveloperPost={"Web Developer" }
        DeveloperImage={Shivam}
      />

        </div>
        </section>
      </>


  )
}

export default Developer;