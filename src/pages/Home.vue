<template>
  <q-page class="q-pt-md">
    <p>
      {{ $t("welcomeToMyWebsite") }}
    </p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.move-box {
  display: flex;
  flex-direction: column;
}
</style>
