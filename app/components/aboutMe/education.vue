<template>
  <div>
    <div class="pl-2 pb-2 text-3xl border-b-2">Education</div>
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
            <span class="text-xl">
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
