import { z } from "zod";

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export const createBlogPost = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogPost = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signupInput>;
export type CreateBlogPost = z.infer<typeof createBlogPost>;
export type UpdateBlogPost = z.infer<typeof updateBlogPost>;
