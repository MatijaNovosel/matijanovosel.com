import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.supabaseUrl,
  process.env.supabaseAnon
);

export default defineEventHandler(async (event) => {
  const blogId = event.context.params.slug;
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", parseInt(blogId));

  if (error) {
    throw error;
  }

  return {
    data
  };
});
