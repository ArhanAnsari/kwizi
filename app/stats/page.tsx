import { auth } from "@clerk/nextjs/server";
import { error } from "console";
import React from "react";
import prisma from "@/utils/connect";
import UserStats from "@/components/UserStats";

async function page() {
  const { userId } = await auth();

  if (!userId) {
    return { error: "You need to be logged in to view this page" };
  }

  // get user data --> populate the categoryStats using the category

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    include: {
      categoryStats: {
        include: {
          category: true, // populate the category
        },
      },
    },
  });

  console.log("User stats:", user);

  return (
    <div>
      <UserStats userStats={user} />
    </div>
  );
}

export default page;
