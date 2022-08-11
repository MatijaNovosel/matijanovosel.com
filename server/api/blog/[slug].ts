import { createClient } from "@supabase/supabase-js";
import { BlogListItem } from "~/models";

const supabase = createClient(
  process.env.supabaseUrl,
  process.env.supabaseAnon
);

export default defineEventHandler(async (event) => {
  const blogId = event.context.params.slug;

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
    img: data.image_url,
    subtitle: data.subtitle,
    tags: data.tags.split(","),
    title: data.title,
    html: data.html
  } as BlogListItem;
});
