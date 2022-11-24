<template>
  <div class="bg-dark-800 rounded-lg mt-5">
    <div class="font-bold p-3 text-xl rounded-t-lg bg-dark-400">
      🎓 Education
    </div>
    <timeline class="p-5">
      <timeline-item
        v-for="({ name, duration, link, title }, i) in EDUCATION"
        :key="i"
      >
        <template #title>
          <div class="flex flex-col">
            <a
              :href="link"
              class="text-white font-bold decoration-dotted underline underline-offset-5"
            >
              {{ name }}
            </a>
            <span class="my-1 text-xs text-green-vue">
              {{ title }}
            </span>
            <span class="text-xs text-gray-400">
              {{ duration }}
            </span>
          </div>
        </template>
      </timeline-item>
    </timeline>
  </div>
</template>

<script lang="ts" setup>
import { EDUCATION } from "~/utils/constants";
</script>
