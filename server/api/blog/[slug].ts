import { createClient } from "@supabase/supabase-js";
import type { BlogListItem } from "~/models";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON!
);

export default defineEventHandler(async (event) => {
  const blogId = event.context.params!.slug;

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("title_id", blogId)
    .single();

  if (error) {
    throw error;
  }

  return {
    createdAt: `${new Date(data.created_at).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "2-digit"
    })}'`,
    id: data.title_id,
    subtitle: data.subtitle,
    tags: data.tags.split(","),
    title: data.title,
    html: data.html
  } as BlogListItem;
});
