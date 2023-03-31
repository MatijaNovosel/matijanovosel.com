<template>
  <div class="bg-dark-800 rounded-lg mt-5">
    <div class="font-bold p-3 text-3xl border-b-2">Education</div>
    <timeline class="p-5">
      <timeline-item
        v-for="({ name, duration, link, title }, i) in EDUCATION"
        :key="i"
      >
        <template #title>
          <div class="flex flex-col">
            <a
              :href="link"
              class="text-white text-xl font-bold decoration-dotted underline underline-offset-5"
            >
              {{ name }}
            </a>
            <span class="my-1 text-xl text-green-vue">
              {{ title }}
            </span>
            <span class="text-xl text-gray-400">
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
