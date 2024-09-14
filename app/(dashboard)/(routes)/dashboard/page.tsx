"use client"
import db from "@/app/db";
import { getServerSession } from "next-auth";
import { authConfig } from "@/app/lib/auth";
import { ProfileCard } from "@/components/ProfileCard";

// Server-side function to get the user's Solana wallet
async function getUserWallet() {
  const session = await getServerSession(authConfig);
  const userWallet = await db.solWallet.findFirst({
    where: {
      userId: session?.user?.uid,
    },
    select: {
      publicKey: true,
    },
  });

  if (!userWallet) {
    return {
      error: "No Solana wallet found associated with the user",
    };
  }

  return { error: null, userWallet };
}

export default async function WalletPage() {
  const userWallet = await getUserWallet();

  if (userWallet.error || !userWallet.userWallet?.publicKey) {
    return <>No Solana Wallet found..</>;
  }

  return <ProfileCard publicKey={userWallet.userWallet?.publicKey} />;
}
