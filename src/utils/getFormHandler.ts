import { FormEvent, FormEventHandler } from "react";

export const getFormHandler =
  (
    cb: (e: FormEvent<HTMLFormElement>) => void
  ): FormEventHandler<HTMLFormElement> =>
  (e) => {
    e.preventDefault();
    cb(e);
  };
