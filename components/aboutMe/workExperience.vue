<template>
  <div class="bg-dark-800 rounded-lg mt-5">
    <div class="font-bold p-3 text-xl bg-dark-400 rounded-t-lg">
      💼 Work experience
    </div>
    <Timeline class="p-5">
      <TimelineItem time="August 2021 - Current">
        <template #title>
          <div class="flex flex-col">
            <a
              href="https://king-ict.com/"
              class="text-white font-bold decoration-dotted underline underline-offset-5"
            >
              King ICT
            </a>
            <span class="my-1 text-xs text-green-vue">
              Software developer (student)
            </span>
            <span class="text-xs text-gray-400">
              August 2021 - Current ({{
                dateDiffReadable(new Date("2021-08-01"), new Date())
              }})
            </span>
          </div>
        </template>
        <div class="flex flex-col text-sm space-y-1 text-gray-300 mt-3">
          <div>⚫ Developed software using full stack web technologies</div>
          <div>
            ⚫ Developed and deployed mobile applications for both Android and
            iOS
          </div>
          <div>
            ⚫ Mentored employees and created educational content for teaching
            purposes
          </div>
          <div>⚫ Worked efficiently in an Agile team</div>
        </div>
      </TimelineItem>
      <TimelineItem>
        <template #title>
          <div class="flex flex-col">
            <a
              href="https://www.omega-software.hr/"
              class="text-white font-bold decoration-dotted underline underline-offset-5"
            >
              Omega software
            </a>
            <span class="my-1 text-xs text-green-vue">
              Junior software developer (student)
            </span>
            <span class="text-xs text-gray-400">
              July 2019 - July 2021 ({{
                dateDiffReadable(
                  new Date("2019-07-01"),
                  new Date("2021-07-01")
                )
              }})
            </span>
          </div>
        </template>
        <div class="flex flex-col text-sm space-y-1 text-gray-300 mt-3">
          <div>
            ⚫ Developed software on multiple company projects for the Croatian
            government using full stack web technologies
          </div>
          <div>
            ⚫ Mentored and created educational content for new and future
            employees
          </div>
          <div>⚫ Worked efficiently in an Agile team</div>
        </div>
      </TimelineItem>
      <TimelineItem>
        <template #title>
          <div class="flex flex-col">
            <a
              href="https://www.maidea.com/"
              class="text-white font-bold decoration-dotted underline underline-offset-5"
            >
              Maidea
            </a>
            <span class="my-1 text-xs text-green-vue">
              Junior software developer (student)
            </span>
            <span class="text-xs text-gray-400">
              May 2018 - February 2019 ({{
                dateDiffReadable(
                  new Date("2018-05-01"),
                  new Date("2019-02-01")
                )
              }})
            </span>
          </div>
        </template>
        <div class="flex flex-col text-sm space-y-1 text-gray-300 mt-3">
          <div>⚫ Developed software using full stack web technologies</div>
        </div>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script lang="ts" setup>
import { dateDiffReadable } from "~/utils/helpers";
</script>
