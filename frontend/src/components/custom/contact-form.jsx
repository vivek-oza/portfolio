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
import { Envelope, PaperPlaneTilt, WarningCircle, Spinner, CheckCircle } from "phosphor-react";
import { motion } from "framer-motion";

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
    const loadingToastId = toast.custom((t) => (
      <motion.div
        className="flex items-center gap-4 px-4 py-2 relative bg-neutral-200 dark:bg-neutral-700 w-fit min-w-[320px] max-w-lg border-none shadow-none rounded-none"
        style={{ boxShadow: 'none' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className='size-1 -left-0.5 -bottom-0.5 absolute bg-black dark:bg-white rounded-full'></div>
        <div className='size-1 -right-0.5 -bottom-0.5 absolute bg-black dark:bg-white rounded-full'></div>
        <div className='size-1 -left-0.5 -top-0.5 absolute bg-black dark:bg-white rounded-full'></div>
        <div className='size-1 -right-0.5 -top-0.5 absolute bg-black dark:bg-white rounded-full'></div>
        <motion.div
          className="animate-spin"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Spinner size={24} />
        </motion.div>
        <div>
          <span className="dark:text-white text-xl font-medium">Sending message...</span>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Please wait while we send your message
          </div>
        </div>
      </motion.div>
    ), { duration: Infinity });

    try {
      setFormData(values);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.custom((t) => (
        <motion.div
          className="flex items-center gap-4 px-4 py-2 relative bg-neutral-200 dark:bg-neutral-700 w-fit min-w-[320px] max-w-lg border-none shadow-none rounded-none"
          style={{ boxShadow: 'none' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <div className='size-1 -left-0.5 -bottom-0.5 absolute bg-black dark:bg-white rounded-full'></div>
          <div className='size-1 -right-0.5 -bottom-0.5 absolute bg-black dark:bg-white rounded-full'></div>
          <div className='size-1 -left-0.5 -top-0.5 absolute bg-black dark:bg-white rounded-full'></div>
          <div className='size-1 -right-0.5 -top-0.5 absolute bg-black dark:bg-white rounded-full'></div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <CheckCircle size={28} className="text-green-500" />
          </motion.div>
          <div>
            <span className="dark:text-white text-xl font-medium">Message sent!</span>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              We've received your message and will get back to you soon.
            </div>
          </div>
        </motion.div>
      ), { duration: 10000 });

      form.reset();
    } catch (error) {
      toast.custom((t) => (
        <motion.div
          className="flex items-center gap-4 px-4 py-2 relative bg-neutral-200 dark:bg-neutral-700 w-fit min-w-[320px] max-w-lg border-none shadow-none rounded-none"
          style={{ boxShadow: 'none' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <div className='size-1 -left-0.5 -bottom-0.5 absolute bg-black dark:bg-white rounded-full'></div>
          <div className='size-1 -right-0.5 -bottom-0.5 absolute bg-black dark:bg-white rounded-full'></div>
          <div className='size-1 -left-0.5 -top-0.5 absolute bg-black dark:bg-white rounded-full'></div>
          <div className='size-1 -right-0.5 -top-0.5 absolute bg-black dark:bg-white rounded-full'></div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <WarningCircle size={28} className="text-red-500" />
          </motion.div>
          <div>
            <span className="dark:text-white text-xl font-medium">Error sending message</span>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Failed to send message. Please try again.
            </div>
          </div>
        </motion.div>
      ), { duration: 10000 });
    } finally {
      toast.dismiss(loadingToastId);
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
                  className="min-h-[220px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner className="mr-2 animate-spin" size={20} />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
