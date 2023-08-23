import { Router } from 'next/router';

export default Router.route('/student-chat/:rollNo', () => {
  return (
    <div>
      <h1>Chat with student</h1>
      <p>This is the chat page for student with roll number :rollNo</p>
    </div>
  );
});