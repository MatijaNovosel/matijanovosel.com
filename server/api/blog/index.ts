import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.supabaseUrl,
  process.env.supabaseAnon
);

export default defineEventHandler(async () => {
  const { data, error } = await supabase.from("blogs").select("*");

  if (error) {
    throw error;
  }

  return {
    data
  };
});
