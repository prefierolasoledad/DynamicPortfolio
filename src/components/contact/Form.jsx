"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const { dict } = useI18n();
  const t = dict.contact.form;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      console.error(
        "EmailJS is not configured: set NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID and NEXT_PUBLIC_PUBLIC_KEY in .env.local"
      );
      toast.error(t.notConfigured);
      return;
    }

    const toastId = toast.loading(t.sending);

    // toast.info(
    //   "Form submissions are demo-only here. Please checkout the final code repo to enable it. If you want to connect you can reach out to me via codebucks27@gmail.com.",
    //   {
    //     id: toastId,
    //   }
    // );

    // comment out the above toast.info and uncomment the below code to enable emailjs

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // you can not send more then 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success(
            t.success,
            {
              id: toastId,
            }
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(
            t.error,
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Karan Bhatt",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder={t.name}
          {...register("name", {
            required: t.required,
            minLength: {
              value: 3,
              message: t.nameMin,
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder={t.email}
          {...register("email", { required: t.required })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          placeholder={t.message}
          {...register("message", {
            required: t.required,
            maxLength: {
              value: 500,
              message: t.messageMax,
            },
            minLength: {
              value: 50,
              message: t.messageMin,
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value={t.submit}
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      "
          type="submit"
        />
      </motion.form>
    </>
  );
}
