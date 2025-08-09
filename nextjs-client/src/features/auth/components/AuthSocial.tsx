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
        <span className="flex-1 border-t" />
        <span className="px-3 text-xs uppercase text-muted-foreground bg-background">
          Or
        </span>
        <span className="flex-1 border-t" />
      </div>
    </>
  );
}
