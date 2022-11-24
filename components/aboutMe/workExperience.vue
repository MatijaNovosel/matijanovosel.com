<template>
  <div class="bg-dark-800 rounded-lg mt-5">
    <div class="font-bold p-3 text-xl bg-dark-400 rounded-t-lg">
      💼 Work experience
    </div>
    <timeline class="p-5">
      <timeline-item
        v-for="(
          { company, description, from, to, link, position }, i
        ) in WORK_EXPERIENCE"
        :key="i"
      >
        <template #title>
          <div class="flex flex-col">
            <nuxt-link
              :to="link"
              class="text-white font-bold decoration-dotted underline underline-offset-5"
            >
              {{ company }}
            </nuxt-link>
            <span class="my-1 text-xs text-green-vue">
              {{ position }}
            </span>
            <span class="text-xs text-gray-400">
              {{ formatDuration(from, to) }}
            </span>
          </div>
        </template>
        <div class="flex flex-col text-sm space-y-1 text-gray-300 mt-3">
          <div v-for="(line, j) in description" :key="j">⚫ {{ line }}</div>
        </div>
      </timeline-item>
    </timeline>
  </div>
</template>

<script lang="ts" setup>
import { WORK_EXPERIENCE } from "~/utils/constants";
import { formatDuration } from "~/utils/helpers";
</script>
