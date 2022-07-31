<template>
  <div class="pos-rel">
    <prism-editor lang="html" readonly class="editor" :model-value="code" :highlight="highlighter" />
    <q-btn
      flat
      round
      icon="mdi-content-copy"
      color="white"
      class="top-right"
      @click="copyToClipboard(code || '')"
    >
      <q-tooltip> Copy to clipboard </q-tooltip>
    </q-btn>
  </div>
</template>

<script lang="ts" setup>
import { PrismEditor } from "vue-prism-editor";
import { copyToClipboard } from "quasar";
import { highlight, languages } from "prismjs";

import "vue-prism-editor/dist/prismeditor.min.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "src/css/oneDarkPrism.css";

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

defineProps({
  code: String
});
</script>

<style scoped>
.editor {
  background: rgb(40, 44, 52);
  font-family: CascadiaCode;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 12px;
  padding: 15px 25px 0px 25px;
}

:deep(.prism-editor__textarea):focus {
  outline: none !important;
}

.top-right {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
