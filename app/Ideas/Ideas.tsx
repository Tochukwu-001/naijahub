"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";

type BusinessIdea = {
  id: string;
  name?: string;
  info?: string;
  sector?: string;
  initialCapital?: string;
  address?: string;
  resources?: string;
  authorName?: string;
  createdAt?: string;
};

export default function Ideas() {
  const [arr, setArr] = useState([]);
  const [ideas, setIdeas] = useState<BusinessIdea[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { 
    let isActive = true;

    const fetchIdeas = async () => {
      try {
        const dbArray = []
        const snapshot = await getDocs(collection(db, "business_Ideas"));
        if (isActive) {
          setIdeas(
            snapshot.docs.map((document) => ({
              ...document.data(),
              id: document.id,
            })),
          );
        }
      } catch (error) {
        console.error("Failed to fetch business ideas.", error);
        if (isActive) {
          setError("Ideas could not be loaded. Please try again later.");
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    void fetchIdeas();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <main className="min-h-dvh bg-neutral-950 px-5 py-16 text-neutral-100">
      <section className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold">Business Ideas</h1>

        {isLoading && <p role="status">Loading ideas...</p>}
        {error && <p role="alert">{error}</p>}

        {!isLoading && !error && ideas.length === 0 && (
          <p>No business ideas have been posted yet.</p>
        )}

        {ideas.length > 0 && (
          <ul className="grid gap-6 md:grid-cols-2">
            {ideas.map((idea) => (
              <li
                key={idea.id}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
              >
                <h2 className="mb-2 text-2xl font-semibold">
                  {idea.name || "Untitled business idea"}
                </h2>
                {idea.sector && (
                  <p className="mb-3 text-sm text-emerald-400">{idea.sector}</p>
                )}
                {idea.info && <p className="mb-4 text-neutral-300">{idea.info}</p>}
                {idea.initialCapital && (
                  <p className="text-sm text-neutral-400">
                    Initial capital: {idea.initialCapital}
                  </p>
                )}
                {idea.address && (
                  <p className="text-sm text-neutral-400">Location: {idea.address}</p>
                )}
                {idea.resources && (
                  <p className="mt-2 text-sm text-neutral-400">
                    Resources: {idea.resources}
                  </p>
                )}
                {idea.authorName && (
                  <p className="mt-4 text-sm text-neutral-500">
                    Posted by {idea.authorName}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
