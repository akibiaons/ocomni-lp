"use cleint";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name",
  }),
  lastName: z.string().min(2, {
    message: "Last Name",
  }),
});

export const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <div>
      <div>Sign Up</div>
    </div>
  );
};
