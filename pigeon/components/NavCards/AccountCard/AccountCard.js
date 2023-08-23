import React from 'react';
import Link from 'next/link';
const AccountCard = ({ onSignInClick }) => {
  return (
    <div className="bg-purple-900 p-4 rounded shadow  ">
      <p>Your Account</p>
      <Link href="/sign-in">
      <button className=" bg-slate-200 text-yellow-500 font-semibold px-2 py-1 rounded mt-2" onClick={onSignInClick}>
        Sign In
        </button>
        </Link>
    </div>
  );
};

export default AccountCard;
