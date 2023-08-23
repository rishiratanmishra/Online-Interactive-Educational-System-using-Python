
import AcademicProgress from './Child/AcademicProgress';
import AssignmentSection from './Child/AssignmentSection';
import CalendarNEvents from './Child/CalendarNEvents';
import OverView from './Child/OverView';
import Resources from './Child/Resources';

const ParentsDashboard = () => {
  return (
    <>
    <div className=" flex flex-col gap-6">
    <div className="bg-green-600 p-4 text-white grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-rows-2 justify-between">
    <p className="text-xl">
      Hi, <span className="text-yellow-500 font-semibold">Rishi</span>
    </p>
    <p className="text-gray-300 text-right">Track your child's achievements</p>
  </div>
  
        


        
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
      </div>
   

      <OverView />
      <AcademicProgress />
      <AssignmentSection />
      <CalendarNEvents />
        <Resources />
        </div>
      </>
  );
};

export default ParentsDashboard;
