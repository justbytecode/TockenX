"use client"

import { motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { PrimaryButton } from './Button';

const Navbar = () => {
    const session = useSession();
  return (
    <div>
    <div className=" p-5 bg-gray-950  rounded   flex justify-between font-bold text-xl">
      <div>
      <Link href={"/"}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r justify-center from-orange-800 to-yellow-700"
            >
              Token-X
            </motion.div>
          </Link>
      </div>
      <div>
        {session.data?.user ? (
          <PrimaryButton
          
            onClick={() => {
              signOut();
            }}
          >
            {" "}
            LogOut
          </PrimaryButton>
        ) : (
          <PrimaryButton
            onClick={() => {
              signIn();
            }}
          >
            Sign-In
          </PrimaryButton>
        )}
      </div>
      
    </div>

    </div>
  )
}

export default Navbar