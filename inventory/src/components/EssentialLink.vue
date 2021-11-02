<template>
  <q-item class="text-white"
    clickable
    tag="a"
    :active="isactive !== 'product'"
    @click="activeMenu(link)"
    :to="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <!-- <q-icon :name="icon" /> -->
      <img :src="icon" style="width:45px; heigth:45px;">
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption class="text-white">
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '/'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      isactive: ref('')
    }
  },
  methods: {
    activeMenu(link) {
      this.isactive = link;
    }
  }
})
</script>
