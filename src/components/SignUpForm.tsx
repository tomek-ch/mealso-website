import { useState } from "react";
import { getFormHandler } from "../utils/getFormHandler";
import { Button } from "./Button";
import { Alert } from "./Alert";
import { Input } from "./Input";

interface SignUpFormProps {}

export const SignUpForm = ({}: SignUpFormProps) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = getFormHandler(() => {
    if (!input) {
      setError("Please provide an email address");
      return;
    }

    if (!input.includes("@")) {
      setError('Email must include "@"');
      return;
    }

    setError("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  });

  return (
    <>
      <p className="text-slate-600">
        Sign up to get notified when Mealso is released.
      </p>
      <form className="flex gap-2 mt-4" onSubmit={handleSubmit}>
        <Input
          autoFocus
          placeholder="Email"
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
        />
        <Button className="ml-auto" loading={isSubmitting}>
          Sign up
        </Button>
      </form>
      <Alert variant="danger" className="mt-4">
        {error}
      </Alert>
      <Alert variant="success" className="mt-4">
        {isSubmitted && "Success!"}
      </Alert>
    </>
  );
};
