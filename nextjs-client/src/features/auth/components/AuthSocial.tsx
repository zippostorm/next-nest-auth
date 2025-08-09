import { Button } from "@/shared/components/ui/button";
import { FaGoogle } from "react-icons/fa";

export function AuthSocial() {
  return (
    <>
      <div className="w-full">
        <Button variant={"outline"} className="w-full">
          <FaGoogle className="size-4" />
          Google
        </Button>
      </div>

      <div className="flex items-center my-4">
        <span className="flex-1 border-t border-border" />
        <span className="z-10 px-3 text-xs uppercase text-muted-foreground bg-card">
          OR
        </span>
        <span className="flex-1 border-t border-border" />
      </div>
    </>
  );
}
