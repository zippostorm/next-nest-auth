import { buttonVariants } from "@/shared/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-5 text-center">
      <h1 className="text-4xl font-bold">Main page</h1>
      <Link href="/auth/login" className={buttonVariants()}>
        Login
      </Link>
    </div>
  );
}
