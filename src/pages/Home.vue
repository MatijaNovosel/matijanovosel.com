<template>
  <q-page class="q-pt-md">
    <p>Hi, here's some vue code:</p>
    <div
      style="
        color: rgb(171, 178, 191);
        background-color: rgb(40, 44, 52);
        font-family: Consolas, 'Courier New', monospace;
        line-height: 19px;
        white-space: pre;
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 14px;
      "
    >
      <div><span style="color: #61afef">watch</span>(</div>
      <div>
        &nbsp; () <span style="color: #c678dd">=&gt;</span> <span style="color: #e5c07b">state</span>.<span
          style="color: #e06c75"
          >darkMode</span
        >,
      </div>
      <div>
        &nbsp; (<span style="color: #e06c75; font-style: italic">val</span>)
        <span style="color: #c678dd">=&gt;</span> {
      </div>
      <div>
        &nbsp; &nbsp; <span style="color: #e5c07b">$q</span>.<span style="color: #e06c75">dark</span>.<span
          style="color: #61afef"
          >set</span
        >(<span style="color: #e06c75; font-style: italic">val</span>);
      </div>
      <div>
        &nbsp; &nbsp; <span style="color: #c678dd">if</span> (<span style="color: #e5c07b">darkMode</span>) {
      </div>
      <div>
        &nbsp; &nbsp; &nbsp; <span style="color: #e5c07b">darkMode</span>.<span style="color: #e06c75"
          >value</span
        >
        <span style="color: #56b6c2">=</span> <span style="color: #e06c75; font-style: italic">val</span>;
      </div>
      <div>&nbsp; &nbsp; }</div>
      <div>&nbsp; }</div>
      <div>);</div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    return {};
  }
});
</script>
