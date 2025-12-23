<template>
  <div>
    <div class="pl-2 pb-2 text-lg font-bold border-b-1">Work experience</div>
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
              class="text-md font-bold underline-offset-5 flex flex-center hover:(text-gray-600) self-baseline"
            >
              {{ company }} <IconOpenInNew class="text-xs ml-1 mt-0.5" />
            </nuxt-link>
            <span class="text-sm">
              {{ position }}
            </span>
            <span class="text-sm text-gray-400">
              {{ formatDuration(from, to) }}
            </span>
          </div>
        </template>
        <ul class="text-sm text-gray-500 mt-2">
          <li v-for="(line, j) in description" class="ml-5" :key="j">
            {{ line }}
          </li>
        </ul>
      </timeline-item>
    </timeline>
  </div>
</template>

<script lang="ts" setup>
import { WORK_EXPERIENCE } from "~/utils/constants";
import { formatDuration } from "~/utils/helpers";
import IconOpenInNew from "~icons/mdi/openInNew";
</script>
