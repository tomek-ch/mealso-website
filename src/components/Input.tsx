export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`
      block w-full py-2 px-3 leading-5 rounded-md bg-gray-200 outline-none
      transition-all focus:outline-2 focus:outline-blue-500 outline-offset-0
      ${props.className || ""}
      `}
    />
  );
};
