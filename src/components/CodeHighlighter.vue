<template>
  <prism-editor readonly class="editor" :model-value="props.code" :highlight="highlighter" />
</template>

<script lang="ts" setup>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-okaidia.css";

const highlighter = (code: string) => {
  return highlight(
    code,
    {
      ...languages.markup,
      ...languages.js,
      ...languages.css
    },
    "markup"
  );
};

const props = defineProps({
  code: String
});
</script>

<style scoped>
.editor {
  background: #2d2d2d;
  font-family: CascadiaCode;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 12px;
  padding: 15px 25px 0px 25px;
}

:deep(.prism-editor__textarea):focus {
  outline: none !important;
}
</style>
