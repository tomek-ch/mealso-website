import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

interface SignUpFormProps {}

export const SignUpForm = ({}: SignUpFormProps) => {
  const [input, setInput] = useState("");
  return (
    <>
      <p className="text-slate-600">
        Sign up to get notified when Mealso is released.
      </p>
      <form
        className="flex gap-2 mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(input);
        }}
      >
        <Input
          autoFocus
          placeholder="Email"
          onChange={({ target: { value } }) => setInput(value)}
        />
        <Button className="ml-auto">Sign up</Button>
      </form>
    </>
  );
};
