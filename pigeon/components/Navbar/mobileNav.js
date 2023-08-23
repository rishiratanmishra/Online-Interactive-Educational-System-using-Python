import Link from 'next/link';
import  Image  from 'next/image';
import React from 'react';
import styles from '../../styles/mobilenav.module.css';
import { Staatliches } from 'next/font/google';

import LOGO from '../../public/logogif.gif';

import {
  BsFillHouseFill,
  BsFillChatRightFill,
  BsFillClipboardPlusFill,
} from 'react-icons/bs';

const staatliches = Staatliches({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const MobileNav = () => {
  return (
    <div className={`${styles.background_color} h-screen w-60 flex flex-col lg:hidden`}>
      <div className="flex flex-col justify-center align-middle items-center mt-10">
        <Link href="/">
          <Image
            src={LOGO}
            alt="logo"
            width={80}
            height={50}
            className="scale-x-[-1] rounded-full"
          />
        </Link>
        <Link href="/">
          <h2 className={`cursor-pointer text-2xl ${staatliches.className} hover:text-yellow-500`}>
            PIGEON LMS
          </h2>
        </Link>
      </div>
      <div className="flex flex-col mt-8">
        <ul className="flex flex-col gap-4">
          <Link href="/">
            <div className="flex items-center ml-3 gap-2 text-lg hover:text-yellow-500">
              <BsFillHouseFill />
              Dashboard
            </div>
          </Link>

          <Link href="/student-chat">
            <div className="flex items-center ml-3 gap-2 text-lg hover:text-yellow-500">
              <BsFillChatRightFill />
              Chat
            </div>
          </Link>

          <Link href="/create-notification">
            <div className="flex items-center ml-3 gap-2 text-lg hover:text-yellow-500">
              <BsFillClipboardPlusFill />
              Notify
            </div>
          </Link>

          <Link href="/parents">
            <div className="flex items-center ml-3 gap-2 text-lg hover:text-yellow-500">
              <BsFillClipboardPlusFill />
              Parent Portal
            </div>
          </Link>

          <Link href="/student">
            <div className="flex items-center ml-3 gap-2 text-lg hover:text-yellow-500">
              <BsFillClipboardPlusFill />
              Student Portal
            </div>
          </Link>

          <Link href="/teacher">
            <div className="flex items-center ml-3 gap-2 text-lg hover:text-yellow-500">
              <BsFillClipboardPlusFill />
              Teacher Portal
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
