import { auth } from "@/auth";
import AuthPage from "@/components/AuthPage";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();

  if (session) {
    redirect("/post");
  }

  return <AuthPage mode="signin" />;
}