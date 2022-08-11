import { createClient } from "@supabase/supabase-js";
import { BlogListItem } from "~/models";

const supabase = createClient(
  process.env.supabaseUrl,
  process.env.supabaseAnon
);

export default defineEventHandler(async () => {
  const { data, error } = await supabase
    .from("blogs")
    .select("created_at, title, title_id, image_url, subtitle, tags")
    .order("created_at", {
      ascending: false
    });

  if (error) {
    throw error;
  }

  return data.map<BlogListItem>((blog) => ({
    createdAt: `${new Date(blog.created_at).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "2-digit"
    })}'`,
    title: blog.title,
    id: blog.title_id,
    img: blog.image_url,
    subtitle: blog.subtitle,
    tags: blog.tags.split(",")
  }));
});
