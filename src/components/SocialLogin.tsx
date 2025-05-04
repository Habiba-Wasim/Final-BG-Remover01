import React from "react";
import { auth } from "../lib/firebase"; // Adjust path as needed
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";

const SocialLogin: React.FC = () => {
  const handleLogin = async (providerType: "facebook" | "google") => {
    let provider;

    if (providerType === "facebook") {
      provider = new FacebookAuthProvider();
    } else {
      provider = new GoogleAuthProvider();
    }

    try {
      const result: UserCredential = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(`✅ ${providerType.toUpperCase()} Login Success:`, user);
      // Yahan tum redirect ya state update karo
    } catch (error: any) {
      console.error(`❌ ${providerType.toUpperCase()} Login Error:`, error.message);
    }
  };

  return (
    <div className="space-y-4 flex flex-col items-center">
      <button
        onClick={() => handleLogin("facebook")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-64"
      >
        Login with Facebook
      </button>
      <button
        onClick={() => handleLogin("google")}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-64"
      >
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
