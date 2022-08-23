<template>
  <div class="px-3 md:px-0 offset">
    <div class="text-4xl font-bold mb-4 md:mb-8 mt-6 text-center md:text-left">
      About me
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-12 md:col-span-7 md:pr-5">
        <BlogPicture class="md:hidden mt-2" />
        <p class="mt-5 md:mt-0">
          Hi. I'm a programmer from Croatia. I like developing applications of
          all sorts and have been interested in doing so from a young age.
          Currently finishing my Masters degree at the Zagreb university of
          applied sciences.
        </p>
        <p class="mt-2">
          Besides programming I enjoy video games, reading, drawing and
          listening to music.
        </p>
        <div class="font-bold pt-4 text-xl">Technologies</div>
        <BlogTechnologyList class="mt-2" />
        <BlogContact class="md:hidden" />
        <div class="font-bold py-4 text-xl">Work experience</div>
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
          <TimelineItem time="May 2018 - February 2019">
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
        <div class="font-bold py-5 text-xl">Education</div>
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
      <div class="col-span-12 md:col-span-5 hidden md:block text-center">
        <BlogPicture />
        <BlogContact />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setMeta } = useMetadata();
setMeta("Matija Novosel - About me");
</script>
