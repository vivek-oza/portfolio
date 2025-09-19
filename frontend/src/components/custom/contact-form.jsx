import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useContactStore from "@/stores/contact-store";
import { Envelope, PaperPlaneTilt, WarningCircle, Spinner, CheckCircle, X } from "phosphor-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from 'react';

const toastVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 300 } },
  exit: { opacity: 0, x: 50 }
};

const iconVariants = {
  hover: { scale: 1.1, rotate: 10 },
  tap: { scale: 0.9 }
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const { setFormData, setIsSubmitting, isSubmitting } = useContactStore();

  const toastShownRef = useRef(false);

  // Cleanup function to clear any toasts when component unmounts
  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, [toast]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    const toastOptions = {
      position: 'bottom-right',
      duration: 10000,
      className: '!bg-white dark:!bg-neutral-900 !text-neutral-900 dark:!text-white !shadow-lg !p-0 !min-w-[320px] !border !border-neutral-200 dark:!border-neutral-700 overflow-hidden',
      containerStyle: {
        marginBottom: '1rem',
      },
      containerClassName: '!flex flex-col-reverse gap-2',
    };

    // No need to show the toast here anymore as it's shown on component mount

    const loadingToastId = 'loading-toast';
    toast.custom((t) => (
      <div className="bg-neutral-950 rounded-lg shadow-lg border border-neutral-800 overflow-hidden">
        <div className="flex items-center gap-4 p-4">
          <div className="relative">
            <Spinner size={28} className="animate-spin text-blue-400" />
          </div>
          <div className="flex-1 text-left">
            <div className="font-medium text-white text-base">Sending message</div>
            <div className="text-sm text-neutral-300 mt-0.5">Please wait a moment</div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toast.dismiss(t.id);
            }}
            className="text-neutral-400 cursor-pointer hover:text-neutral-900 dark:hover:text-white transition-colors p-1"
          >
            <X size={20} weight="bold" />
          </button>
        </div>
      </div>
    ), { ...toastOptions, id: loadingToastId, duration: 1000000 });

    try {
      setFormData(values);

      // Simulate API call with 2 second delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Alternate between success and error
      const shouldSucceed = 1;

      // Dismiss loading toast
      toast.dismiss(loadingToastId);

      if (shouldSucceed) {
        // Show success toast
        toast.custom((t) => (
          <div className="bg-neutral-950 rounded-lg shadow-lg border border-green-500/30 overflow-hidden">
            <div className="flex items-center gap-4 p-4">
              <div className="text-green-400">
                <CheckCircle size={28} weight="fill" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-white text-base">Message sent! (Well, not really)</div>
                <div className="text-sm text-neutral-300 mt-0.5">This is just a demo. I'll get back to you for real once this is hooked up!</div>
              </div>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="text-neutral-400 cursor-pointer hover:text-neutral-900 dark:hover:text-white transition-colors p-1"
              >
                <X size={20} weight="bold" />
              </button>
            </div>
          </div>
        ), { ...toastOptions, duration: 100000 });

        form.reset();
      } else {
        // Show error toast
        throw new Error('Simulated error');
      }
    } catch (error) {
      // Dismiss loading toast and show error
      toast.dismiss(loadingToastId);
      toast.custom((t) => (
        <div className="bg-neutral-950 rounded-lg shadow-lg border border-red-500/30 overflow-hidden">
          <div className="flex items-center gap-4 p-4">
            <div className="text-red-400">
              <WarningCircle size={28} weight="fill" />
            </div>
            <div className="flex-1 text-left">
              <div className="font-medium text-white text-base">Whoops! Something went wrong</div>
              <div className="text-sm text-neutral-300 mt-0.5">Good news is, it's just a demo! Bad news is, I didn't get your message.</div>
            </div>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-neutral-400 cursor-pointer hover:text-neutral-900 dark:hover:text-white transition-colors p-1"
            >
              <X size={20} weight="bold" />
            </button>
          </div>
        </div>
      ), { ...toastOptions, duration: 100000 });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-2 justify-between h-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message here..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner className="mr-2 animate-spin" size={20} />
              Sending...
            </>
          ) : (
            <span className="flex items-center gap-2">
              Send Message
              <span className="text-xs opacity-70">(Demo)</span>
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
}
