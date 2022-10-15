<template>
  <div class="bg-dark-800 rounded-lg mt-5">
    <div class="font-bold p-3 text-xl rounded-t-lg bg-dark-400">
      🎓 Education
    </div>
    <Timeline class="p-5">
      <TimelineItem v-for="(item, i) in EDUCATION" :key="i">
        <template #title>
          <div class="flex flex-col">
            <a
              :href="item.link"
              class="text-white font-bold decoration-dotted underline underline-offset-5"
            >
              {{ item.name }}
            </a>
            <span class="my-1 text-xs text-green-vue">
              {{ item.title }}
            </span>
            <span class="text-xs text-gray-400">
              {{ item.duration }}
            </span>
          </div>
        </template>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script lang="ts" setup>
import { EDUCATION } from "~/utils/constants";
</script>
