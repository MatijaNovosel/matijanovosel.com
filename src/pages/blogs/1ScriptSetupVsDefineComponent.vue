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
    <p class="q-pt-md">
      The Composition API is centered around declaring reactive state variables directly in a function scope,
      and composing state from multiple functions together to handle complexity. It is more free-form, and
      requires understanding of how reactivity works in Vue to be used effectively. In return, its flexibility
      enables more powerful patterns for organizing and reusing logic.
    </p>
    <code-highlighter :code="compositionApiCode" />
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
  // This will be called when the component is mounted.
  mounted() {
    console.log(\`The initial count is \${count.value}.\`)
  }
}
<\/script>

<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>
`;

const compositionApiCode = `<script>
import { ref, onMounted, defineComponent } from "vue";

export default defineComponent({
  setup() {
    // reactive state
    const count = ref(0);

    // functions that mutate state and trigger updates
    function increment() {
      count.value++;
    }

    // lifecycle hooks
    onMounted(() => {
      console.log(\`The initial count is \${count.value}.\`);
    });

    return {};
  }
});
<\/script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
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
</style>
