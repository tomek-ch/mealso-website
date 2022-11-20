import { Button } from "./Button";
import { Input } from "./Input";

interface SignUpFormProps {}

export const SignUpForm = ({}: SignUpFormProps) => {
  return (
    <>
      <p className="text-slate-600">
        Sign up to get notified when Mealso is released.
      </p>
      <form className="flex gap-2 mt-4">
        <Input className="" autoFocus placeholder="Email" />
        <Button className="ml-auto">Sign up</Button>
      </form>
    </>
  );
};
