"use client";

import { useForm } from "react-hook-form";
import { AuthWrapper } from "./AuthWrapper";
import { RegisterSchema, TypeRegisterSchema } from "../schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function RegisterForm() {
  const form = useForm<TypeRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

  const onSubmit = (values: TypeRegisterSchema) => {
    console.log(values);
  };

  return (
    <AuthWrapper
      heading="Register"
      description="For register you need write your email and password"
      backButtonLabel="You have an account already? Login"
      backButtonHref="/auth/login"
      isShowSocial
    >
      RegisterForm
    </AuthWrapper>
  );
}
