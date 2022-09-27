<template>
  <div class="font-bold pb-5 text-xl">🎓 Education</div>
  <Timeline>
    <TimelineItem time="September 2020 - Current">
      <template #title>
        <div class="flex flex-col">
          <a
            href="https://www.tvz.hr/"
            class="text-white font-bold decoration-dotted underline underline-offset-5"
          >
            Zagreb university of applied sciences
          </a>
          <span class="mt-1 text-xs text-green-vue">
            Master's degree (struc. spec. ing. techn. inf.)
          </span>
        </div>
      </template>
    </TimelineItem>
    <TimelineItem time="September 2017 - July 2020">
      <template #title>
        <div class="flex flex-col">
          <a
            href="https://www.tvz.hr/"
            class="text-white font-bold decoration-dotted underline underline-offset-5"
          >
            Zagreb university of applied sciences
          </a>
          <span class="mt-1 text-xs text-green-vue">
            Bachelor of Engineering in Information Technology (bacc. ing. techn.
            inf.)
          </span>
        </div>
      </template>
    </TimelineItem>
    <TimelineItem time="September 2013 - July 2017">
      <template #title>
        <div class="flex flex-col">
          <a
            href="https://www.tsrb.hr/"
            class="text-white font-bold decoration-dotted underline underline-offset-5"
          >
            Tehnička škola Ruđera Boškovića
          </a>
          <span class="mt-1 text-xs text-green-vue"> Computer technician </span>
        </div>
      </template>
    </TimelineItem>
  </Timeline>
</template>
