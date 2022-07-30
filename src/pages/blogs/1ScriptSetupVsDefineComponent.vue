<template>
  <div
    class="blog-img q-mb-md"
    :style="{
      backgroundImage: 'url(/vue.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: `${smAndDown() ? 200 : 400}px`
    }"
  />
  <div class="column q-my-lg">
    <span :class="smAndDown() ? 'text-h4' : 'text-h3'" class="text-bold">
      &lt;script setup&gt; vs defineComponent
    </span>
    <span class="text-grey-5 q-mt-md">
      Published on
      <span class="text-orange-4">
        {{ formatMonth(new Date()) }}
      </span>
    </span>
  </div>
  <div class="bg-dark q-py-md q-px-lg q-mb-xl blog-desc text-justify">
    <p>
      With the creation of Vue 3 the community has been introduced to a new, more function oriented way of
      organizing component structure dubbed the Composition API. The previous way being named the Options API
      was more akin to an object oriented approach, heavily relying on the
      <span class="text-orange-4">this</span> keyword.
    </p>
    <p>
      Even though both ways are fully capable of covering common use cases, the options API had its use but in
      the bigger picture it severely limited the developer as it abstracted away the reactivity details and
      enforced code organization via option groups.
    </p>
    <code-highlighter :code="optionsApiCode" />
  </div>
</template>

<script lang="ts" setup>
import { smAndDown, formatMonth } from "src/utils/helpers";
import CodeHighlighter from "src/components/CodeHighlighter.vue";

const optionsApiCode = `<script>
export default {
  // Properties returned from data() become reactive state and will be exposed on this.
  data() {
    return {
      count: 0
    }
  },
  // Methods are functions that mutate state and trigger updates. They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++
    }
  },
  // Lifecycle hooks are called at different stages of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log()
  }
}
<\/script>

<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>
`;
</script>

<style scoped>
.blog-img {
  border-radius: 16px;
}

.blog-desc {
  border-radius: 16px;
  font-size: 1rem;
}

.my-editor {
  background: #2d2d2d;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 12px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
}

:deep(.prism-editor__textarea):focus {
  outline: none !important;
}
</style>
