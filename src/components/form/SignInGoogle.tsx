import { signIn } from "auth-astro/client";
import { Button } from "@nextui-org/react";
import Google from "../../icons/google";

const SignInGoogle = () => {
  return (
    <div className="w-80">
      <Button
        className="w-full"
        color="primary"
        variant="ghost"
        startContent={<Google className="size-6" />}
        onClick={() => signIn("google")}
      >
        Continue with Google
      </Button>
    </div>
  );
};

export default SignInGoogle;
