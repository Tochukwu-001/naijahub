import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

function requiredEnv(name: string, fallback?: string) {
  const value = process.env[name]?.trim() || fallback?.trim();
  if (!value) {
    throw new Error(`Missing required authentication environment variable: ${name}`);
  }
  return value;
}

const authSecret = requiredEnv("AUTH_SECRET", process.env.NEXTAUTH_SECRET);
const googleClientId = requiredEnv("AUTH_GOOGLE_ID");
const googleClientSecret = requiredEnv("AUTH_GOOGLE_SECRET");

const firebaseCredentials =
  process.env.AUTH_FIREBASE_PROJECT_ID &&
  process.env.AUTH_FIREBASE_CLIENT_EMAIL &&
  process.env.AUTH_FIREBASE_PRIVATE_KEY
    ? cert({
        projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
        clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      })
    : undefined;

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: authSecret,
  trustHost: true,
  providers: [
    Google({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  adapter: firebaseCredentials ? FirestoreAdapter({ credential: firebaseCredentials }) : undefined,
  pages: {
    signIn: "/signin",
  },
}); 