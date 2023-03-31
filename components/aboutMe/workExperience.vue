<template>
  <div>
    <div class="pl-2 pb-2 text-3xl border-b-2">Work experience</div>
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
              class="text-white text-2xl font-bold decoration-dotted underline underline-offset-5"
            >
              {{ company }}
            </nuxt-link>
            <span class="text-2xl">
              {{ position }}
            </span>
            <span class="text-lg text-gray-400">
              {{ formatDuration(from, to) }}
            </span>
          </div>
        </template>
        <div class="flex flex-col text-xl text-gray-300">
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
