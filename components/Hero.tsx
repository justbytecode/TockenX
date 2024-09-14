"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PrimaryButton, SecondaryButton } from "./Button";


const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    setAnimate(true);
  }, []);



  return (
    
    <div>
        
      <div className="text-5xl text-white text-center font-bold ">
        <div>
         
          <span>
            
            <span
              className={`inline-block text-6xl ${
                animate ? "animate-indian-flag" : ""
              }`}
              aria-label="Animated text representing Indian flag colors"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                Ind
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-700">
                ia
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600 mr-5">
                n
              </span>
            </span>
            Crypto Currency of{" "}
          </span>
          <span className="text-purple-400 ">Today</span>
          
        </div>
        
      </div>
      <p className="font-light text-white text-center justify-center mt-4 text-2xl ">
        Create a Easy Implementable wallet from India..
      </p>
      <p className="mb-2 text-white font-medium text-center justify-center text-xl ">
        Convert Your INR into Crypto
      </p>


      <div className="pt-8 flex justify-center">
        {session.data?.user ? (
          <PrimaryButton
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            {" "}
            Go To DashBoard
          </PrimaryButton>
        ) : (
          <SecondaryButton
            onClick={() => {
              signIn("google");
            }}
          >
            Login with Google
          </SecondaryButton>
        )}
      </div>
     
    </div>
    
  );
};

export default Hero;
