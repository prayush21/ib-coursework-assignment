import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Button variant="default">
        <Link href="/coursework">Go to Coursework Page</Link>{" "}
      </Button>
    </main>
  );
}
