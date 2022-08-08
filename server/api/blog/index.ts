import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.supabaseUrl,
  process.env.supabaseAnon
);

export default defineEventHandler(async () => {
  const { data, error } = await supabase.from("blogs_list_view").select("*");

  console.log(data);

  if (error) {
    throw error;
  }

  return {
    api: data
  };
});
