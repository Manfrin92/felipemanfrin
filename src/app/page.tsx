"use client";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <Form />
      <button onClick={() => router.push("server/serverside")}>
        Navigate to Repos
      </button>
    </main>
  );
}
