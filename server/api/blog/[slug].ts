export default defineEventHandler((event) => {
  const blogId = event.context.params.slug;

  console.log(blogId);

  return {
    api: "works"
  };
});
