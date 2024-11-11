import { signIn } from "auth-astro/client";
import { Button } from "@nextui-org/react";
import Google from "../../icons/Google";

const SignInGoogle = () => {
  return (
    <div className="w-80">
      <Button
        className="w-full"
        color="primary"
        variant="ghost"
        startContent={<Google />}
        onClick={() => signIn("google")}
      >
        Continue with Google
      </Button>
    </div>
  );
};

export default SignInGoogle;
