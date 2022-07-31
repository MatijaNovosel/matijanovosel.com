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
      <span class="text-orange-3">
        {{ formatMonth(new Date(1659171113919)) }}
      </span>
    </span>
  </div>
  <div class="bg-dark q-py-md q-px-lg q-mb-xl blog-desc text-justify">
    <h6 class="q-mt-xs q-mb-sm text-orange-3">Introduction</h6>
    <p>
      With the creation of Vue 3 the community has been introduced to a new, more function oriented way of
      organizing component structure dubbed the Composition API. The previous way being named the Options API
      was more akin to an object oriented approach, heavily relying on the
      <span class="text-orange-4">this</span> keyword.
    </p>
    <h6 class="q-mt-xs q-mb-sm text-orange-3">Options API</h6>
    <p>
      Even though both ways are fully capable of covering common use cases, the options API had its use but in
      the bigger picture it severely limited the developer as it abstracted away the reactivity details and
      enforced code organization via option groups.
    </p>
    <code-highlighter :code="optionsApiCode" />
    <h6 class="q-mt-md q-mb-sm text-orange-3">Composition API</h6>
    <p>
      The Composition API is centered around declaring reactive state variables directly in a function scope,
      and composing state from multiple functions together to handle complexity. It is more free-form, and
      requires understanding of how reactivity works in Vue to be used effectively. In return, its flexibility
      enables more powerful patterns for organizing and reusing logic.
    </p>
    <code-highlighter :code="compositionApiCode" />
    <p class="q-pt-md">
      Data that needs to be used on the template must be manually exposed through the return values of the
      defineComponent function which is very verbose, but it allows for clearer insight into what is being
      sent up.
    </p>
    <h6 class="q-mt-md q-mb-sm text-orange-3">&lt;script setup&gt;</h6>
    <p>
      Additionally, another option was added to the Composition API in the form of syntactic sugar - the
      <span class="text-orange-3">setup</span>
      directive. It allows the developer to write top level statements without the additional boilerplate of
      the defineComponent function.
    </p>
    <code-highlighter :code="scriptSetupCode" />
    <p class="q-pt-md">
      Unlike the previous entry, everything is exposed to the template which might make it difficult to manage
      the things that were actually meant to be on the template, but with the amount of reduced boilerplate
      this syntax makes up for that.
    </p>
    <h6 class="q-mt-md q-mb-sm text-orange-3">Props and emits</h6>
    <p>
      The defineComponent approach is verbose and very explicit in the way it functions, such as the props
      property where the properties of the component are defined.
    </p>
    <code-highlighter :code="propsComparisonCodeComposition" />
    <p class="q-pt-md">
      The title prop is immediately available to the template and if it needs to be used in the script it is
      exposed through the parameters of the setup function. The same can be done with the setup directive,
      using the defineProps function.
    </p>
    <code-highlighter :code="propsComparisonCodeSetup" />
    <p class="q-pt-md">
      Notice how we do not need to explicitly write props.title in the template. If the title needs to be used
      in the script, the defineProps function returns a reactive object with the aforementioned prop.
    </p>
    <p>
      The <span class="text-orange-3">defineProps</span> macro is available by default if using the setup
      directive.
    </p>
    <p>The same principle is applied to the emission of events:</p>
    <code-highlighter :code="emitsComparisonCodeComposition" />
    <p class="q-pt-md">
      When not using the setup directive, the emit function must be exposed through the setup function
      parameters.
    </p>
    <code-highlighter :code="emitsComparisonCodeSetup" />
    <p class="q-pt-md">
      In this case, however, only the <span class="text-orange-3">defineEmits</span> macro is neccessary. The
      return value is a function that can be used to emit events.
    </p>
    <h6 class="q-mt-md q-mb-sm text-orange-3">In comparison</h6>
    <div class="row q-mt-md">
      <div class="col-12 col-md-6 q-pr-none q-pr-md-xs">
        <code-highlighter :code="compositionApiCodeNoComment" />
      </div>
      <div class="col-12 col-md-6 q-pl-none q-pl-md-xs q-pt-md q-pt-md-none">
        <code-highlighter :code="scriptSetupCode" />
      </div>
    </div>
    <p class="q-mt-md">
      Comparing the previous blocks of code side by side, we can see a slight decrease in boilerplate. To be
      exact 29 lines vs 20 lines, a 45% decrease!
    </p>
    <h6 class="q-mt-md q-mb-sm text-orange-3">Conclusion</h6>
    <p>
      The defineComponent approach and the setup macro approach are one in the same in terms of functionality
      but differ in regards to the way things are set up. One is verbose and the other is not, if the need for
      more explicit code arises defineComponent is the way to go. When using setup though, a lot of
      boilerplate is removed and top level code becomes the norm. By personal choice, I go with the setup
      syntactic sugar.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { smAndDown, formatMonth } from "src/utils/helpers";
import CodeHighlighter from "src/components/CodeHighlighter.vue";

const optionsApiCode = `<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>

<script>
export default {
  // Properties returned from data() become reactive state and will be exposed on this.
  data() {
    return {
      count: 0
    }
  },
  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
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
`;

const compositionApiCode = `<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>

<script>
import { ref, onMounted, defineComponent } from "vue";

export default defineComponent({
  setup() {
    // Reactive state
    const count = ref(0);

    // Functions that mutate state and trigger updates
    function increment() {
      count.value++;
    }

    // Lifecycle hooks
    onMounted(() => {
      console.log(\`The initial count is \${count.value}.\`);
    });

    return {
      count,
      increment
    };
  }
});
<\/script>
`;

const compositionApiCodeNoComment = `<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>

<script>
import { ref, onMounted, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    onMounted(() => {
      console.log(\`The initial count is \${count.value}.\`);
    });

    return {
      count,
      increment
    };
  }
});
<\/script>
`;

const scriptSetupCode = `<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log(\`The initial count is \${count.value}.\`)
})
<\/script>
`;

const propsComparisonCodeComposition = `<template>
  <span>
    {{ title }}
  </span>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
      required: false
    }
  },
  setup(props) {
    return {};
  }
});
<\/script>
`;

const propsComparisonCodeSetup = `<template>
  <span>
    {{ title }}
  </span>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
    required: false
  }
});
<\/script>
`;

const emitsComparisonCodeComposition = `<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["update:value"],
  setup(props, { emit }) {
    emit("update:value");
    return {};
  }
});
<\/script>
`;

const emitsComparisonCodeSetup = `<script setup>
const emit = defineEmits(["update:value"]);
emit("update:value");
<\/script>
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
