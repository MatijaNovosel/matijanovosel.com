<template>
  <div class="markdown-body" v-html="markdown.render(source)" />
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItTOC from "markdown-it-toc-done-right";

import "~/assets/one-dark-highlight.css";
import "~/assets/github-markdown.css";

const markdown = new MarkdownIt()
  .use(MarkdownItTOC)
  .use(MarkdownItAnchor)
  .use(MarkdownItHighlightjs);

defineProps({
  source: {
    type: String,
    default: ""
  }
});
</script>
