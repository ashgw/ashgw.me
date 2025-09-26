"use client";

import type { SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "@ashgw/design/motion";
import { useForm } from "react-hook-form";
import { toast } from "@ashgw/design/ui";

import { logger } from "@ashgw/logger";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Loading,
} from "@ashgw/design/ui";

import type { UserLoginDto } from "~/api/models";
import { userLoginSchemaDto } from "~/api/models";
import { useAuth } from "~/app/hooks/auth";
import { trpcClientSide } from "~/trpc/callers/client";

export function LoginPage() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const utils = trpcClientSide.useUtils();

  // If already logged in, redirect to editor
  useEffect(() => {
    if (!isLoading && !!user) {
      router.push("/editor");
    }
  }, [isLoading, user, router]);

  const form = useForm<UserLoginDto>({
    resolver: zodResolver(userLoginSchemaDto),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = trpcClientSide.user.login.useMutation({
    onSuccess: () => {
      void utils.user.me.invalidate();
      toast.success("Successfully logged in", {
        description: "You can now create and edit blog posts.",
      });
      router.push("/editor");
    },
    onError: (error) => {
      logger.error("Login failed", { error });
      form.setError("root", {
        message: "Invalid email or password",
      });
    },
  });

  const onSubmit: SubmitHandler<UserLoginDto> = (data) => {
    loginMutation.mutate(data);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="layout mx-auto max-w-md px-4 py-16">
      <motion.div
        className="bg-card rounded-lg border p-6 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h1
          className="mb-2 text-2xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Login
        </motion.h1>

        <motion.p
          className="text-muted-foreground mb-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Enter your credentials to access the blog editor
        </motion.p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your password"
                        type="password"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.formState.errors.root && (
                <div className="text-sm text-red-500">
                  {form.formState.errors.root.message}
                </div>
              )}

              <motion.div
                className="flex justify-end gap-2 pt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => router.push("/editor")}
                  disabled={loginMutation.isPending}
                >
                  Cancel
                </Button>
                <Button
                  variant="default"
                  type="submit"
                  disabled={loginMutation.isPending}
                  loading={loginMutation.isPending}
                >
                  {loginMutation.isPending ? "Logging in..." : "Login"}
                </Button>
              </motion.div>
            </motion.div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
