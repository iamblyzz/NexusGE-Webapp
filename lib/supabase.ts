import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type IntakeSubmission = {
  full_name: string;
  email: string;
  builders: string[];
  has_github: string | null;
  has_vercel: string | null;
  has_supabase: string | null;
  problem: string;
  deadline: string;
  discovery: string | null;
};
