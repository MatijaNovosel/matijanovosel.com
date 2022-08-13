<template>
  <div
    class="justify-center items-center mx-auto w-full flex flex-col max-w-xl mt-10 px-3 md:px-0 offset"
  >
    <img class="me-img" src="/me.jpg" />
    <p class="font-bold mt-6 mb-1 text-3xl md:text-5xl">Matija Novosel</p>
    <p class="text-xl mt-1 text-gray-400">Fullstack developer</p>
    <div class="grid grid-cols-12">
      <div class="col-span-12 text-left mb-0 md:mb-6 mt-4">
        <span class="text-subtitle1 text-gray-400 font-bold"> About me </span>
        <p class="text-justify mt-2">
          Hi. I'm a programmer from Croatia. I like developing applications of
          all sorts and have been interested in doing so from a young age.
          Currently finishing my Masters degree at the Zagreb university of
          applied sciences. Besides programming I enjoy video games, reading,
          drawing and listening to music.
        </p>
      </div>
      <div class="col-span-12 mb-0 md:mb-6 mt-6 md:mt-0">
        <div class="text-subtitle1 text-gray-400 font-bold pb-3">
          Work experience
        </div>
        <Timeline>
          <TimelineItem time="August 2021 - Current">
            <template #title>
              <div class="flex flex-col">
                <a
                  href="https://king-ict.com/"
                  class="text-white font-bold decoration-dotted underline underline-offset-5"
                >
                  King ICT
                </a>
                <span class="mt-1 text-xs text-green-vue">
                  Software developer (student)
                </span>
              </div>
            </template>
            <div class="flex flex-col text-sm space-y-1 text-gray-300">
              <div>
                • Software development using full stack web technologies
              </div>
              <div>• Development of mobile applications</div>
              <div>• Mentoring and creating educational content</div>
            </div>
          </TimelineItem>
          <TimelineItem time="July 2019 - July 2021">
            <template #title>
              <div class="flex flex-col">
                <a
                  href="https://www.omega-software.hr/"
                  class="text-white font-bold decoration-dotted underline underline-offset-5"
                >
                  Omega software
                </a>
                <span class="mt-1 text-xs text-green-vue">
                  Junior software developer (student)
                </span>
              </div>
            </template>
            <div class="flex flex-col text-sm space-y-1 text-gray-300">
              <div>
                • Software development on multiple company projects using full
                stack web technologies
              </div>
              <div>
                • Mentoring and creating educational Javascript content for new
                and future employees
              </div>
            </div>
          </TimelineItem>
          <TimelineItem time="July 2019 - July 2021">
            <template #title>
              <div class="flex flex-col">
                <a
                  href="https://www.maidea.com/"
                  class="text-white font-bold decoration-dotted underline underline-offset-5"
                >
                  Maidea
                </a>
                <span class="mt-1 text-xs text-green-vue">
                  Junior software developer (student)
                </span>
              </div>
            </template>
            <div class="flex flex-col text-sm space-y-1 text-gray-300">
              <div>Software development using full stack web technologies.</div>
            </div>
          </TimelineItem>
        </Timeline>
      </div>
      <div class="col-span-12 mb-0 md:mb-6 mt-6 md:mt-0">
        <div class="text-subtitle1 text-gray-400 font-bold pb-3">Education</div>
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
                  Bachelor of Engineering in Information Technology (bacc. ing.
                  techn. inf.)
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
                <span class="mt-1 text-xs text-green-vue">
                  Computer technician
                </span>
              </div>
            </template>
          </TimelineItem>
        </Timeline>
      </div>
      <div class="col-span-12 md:col-span-6 text-left mt-4 md:mt-0">
        <span class="text-gray-400 font-bold"> Contact </span>
        <div class="flex flex-col mt-2">
          <span> Zagreb, Croatia </span>
          <span> mnovosel5@gmail.com </span>
          <div class="mt-3">
            <a class="text-white" href="https://github.com/MatijaNovosel">
              <IconGithub :style="{ fontSize: '1.6em' }" />
            </a>
            <a
              class="ml-2"
              href="https://www.linkedin.com/in/matija-novosel-616403161/"
            >
              <IconLinkedin :style="{ fontSize: '1.6em' }" />
            </a>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 mt-4 md:mt-0">
        <span class="text-gray-400 font-bold"> Technologies </span>
        <TechnologyList class="mt-2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconLinkedin from "~icons/logos/linkedin-icon";
import IconGithub from "~icons/mdi/github";

const { setMeta } = useMetadata();
setMeta("Matija Novosel - About me");
</script>

<style scoped>
.me-img {
  border-radius: 14px;
  width: 250px;
  height: 250px;
}

@media only screen and (max-width: 600px) {
  .me-img {
    width: 200px;
    height: 200px;
  }
}
</style>
