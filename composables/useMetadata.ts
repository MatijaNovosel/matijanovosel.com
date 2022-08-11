export const useMetadata = () => {
  const setMeta = (
    title: string,
    desc = "A fullstack developer from Croatia. I like developing applications of all sorts.",
    image = "https://jizipjmjieshqxsqkvgw.supabase.co/storage/v1/object/public/bucket/genericVue.jpg"
  ) => {
    useHead({
      title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: desc },
        // Og data
        { name: "og:title", content: title },
        { name: "og:site_name", content: "Matija Novosel" },
        { name: "og:description", content: desc },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://www.matijanovosel.com/" },
        { name: "og:image", content: image },
        // Twitter data
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Matija Novosel" },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: image }
      ]
    });
  };

  return {
    setMeta
  };
};
