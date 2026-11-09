import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Ideas from "./Ideas";

export const dynamic = "force-dynamic";

export default async function IdeasPage() {
  const getSession = async () => {
    try {
      return await auth();
    } catch (error) {
      console.error("Failed to authenticate access to the Ideas page.", error);
      throw error;
    }
  };

  const session = await getSession();

  if (!session) {
    redirect("/signin");
  }

  return <Ideas />;
}

