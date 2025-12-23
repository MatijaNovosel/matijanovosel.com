<template>
  <div>
    <div class="pl-2 pb-2 text-lg font-bold border-b-1">Education</div>
    <timeline class="p-5">
      <timeline-item
        v-for="({ name, duration, link, title }, i) in EDUCATION"
        :key="i"
      >
        <template #title>
          <div class="flex flex-col">
            <nuxt-link
              :to="link"
              class="text-md font-bold underline-offset-5 flex flex-center hover:(text-gray-600) self-baseline"
            >
              {{ name }} <IconOpenInNew class="text-xs ml-1 mt-0.5" />
            </nuxt-link>
            <span class="text-sm pt-1">
              {{ title }}
            </span>
            <span class="text-sm text-gray-400">
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
import IconOpenInNew from "~icons/mdi/openInNew";
</script>
