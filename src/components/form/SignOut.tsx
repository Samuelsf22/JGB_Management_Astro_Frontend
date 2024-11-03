import { signOut } from "auth-astro/client";
import { Button } from "@nextui-org/react";

const SignOut = () => {
  return (
    <div className="w-80">
      <Button
        className="w-full"
        color="primary"
        variant="ghost"
        onClick={() => signOut()}
      >
        Sign out
      </Button>
    </div>
  );
};

export default SignOut;
