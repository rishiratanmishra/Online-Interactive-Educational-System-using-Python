// student-chat/[rollNo].js
import { useRouter } from 'next/router';
import ChatNow from '@/components/ChatNow/ChatNow';

const rollNo = () => {
  const router = useRouter();
  const zollNo  = router.query.rollNo; // Get the 'rollNo' from the dynamic route parameter

  return (

    <>
    

    <ChatNow rollNo={zollNo}/>
    {/* Rest of the page content */}
    </>
  );






  
};





export default rollNo;
