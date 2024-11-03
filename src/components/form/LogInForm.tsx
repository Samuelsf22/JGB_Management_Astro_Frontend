import { useMemo, useState, type FormEvent } from "react";
import { Button, Input } from "@nextui-org/react";
import RiEyeOffLine from "../../icons/eye-off-line";
import RiEyeLine from "../../icons/eye-line";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [value, setValue] = useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  //Validation Log In
  const [responseMessage, setResponseMessage] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/#", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <form className="w-80 space-y-4" onSubmit={submit}>
      <Input
        type="email"
        label="Email"
        variant="bordered"
        size="md"
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "primary"}
        errorMessage="Please enter a valid email"
        onValueChange={setValue}
      />
      <Input
        label="Password"
        variant="bordered"
        size="md"
        color="primary"
        endContent={
          <button
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <RiEyeOffLine className="text-default hover:text-primary w-5 transition-colors" />
            ) : (
              <RiEyeLine className="text-default hover:text-primary w-5 transition-colors" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
      />
      <Button className="w-full" color="primary" variant="solid">
        Log In
      </Button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
