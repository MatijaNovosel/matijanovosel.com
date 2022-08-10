<template>
  <div class="markdown-body" v-html="md" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTasklists from "markdown-it-task-lists";
import MarkdownItTOC from "markdown-it-toc-done-right";

import "~/assets/one-dark-highlight.css";
import "~/assets/github-markdown.css";

const props = defineProps({
  anchor: {
    type: Object,
    default: () => ({})
  },
  emoji: {
    type: Object,
    default: () => ({})
  },
  highlight: {
    type: Object,
    default: () => ({})
  },
  langPrefix: {
    type: String,
    default: "language-"
  },
  quotes: {
    type: String,
    default: "“”‘’"
  },
  source: {
    type: String,
    default: ""
  },
  tasklists: {
    type: Object,
    default: () => ({})
  },
  toc: {
    type: Object,
    default: () => ({})
  }
});

const md = ref();

const renderMarkdown = () => {
  let markdown = new MarkdownIt()
    .use(MarkdownItAbbr)
    .use(MarkdownItAnchor, props.anchor)
    .use(MarkdownItFootnote)
    .use(MarkdownItHighlightjs, props.highlight)
    .use(MarkdownItSub)
    .use(MarkdownItSup)
    .use(MarkdownItTasklists, props.tasklists)
    .use(MarkdownItTOC, props.toc)
    .set({
      langPrefix: props.langPrefix,
      quotes: props.quotes
    });

  md.value = markdown.render(props.source);
};

onMounted(() => renderMarkdown());
</script>
