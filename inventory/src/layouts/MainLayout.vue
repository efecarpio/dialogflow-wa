<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          &nbsp;
        </q-toolbar-title>

        <q-item class="q-gutter-x-sm">
          <q-item-section>
            <div class="text-h6 text-weight-bold">Hola, Usuario!</div>
            <div>Tu venta del día es S/ xxx.xx</div>
          </q-item-section>
          <q-item-section side>
            <q-avatar rounded size="38px">
              <img src="icons/avatar-profile.svg" />
            </q-avatar>
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-blue text-white"
    >
      <q-list>
        <q-item-label
          header
          class="text-white text-center q-py-xl"
        >
          <q-img
            src="icons/turbodega-logo.svg"
            spinner-color="white"
            style="width:71%;"
          />
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Registro de ventas',
    caption: '',
    icon: 'icons/sales.svg',
    link: '/'
  },
  {
    title: 'Reporte de mi negocio',
    caption: '',
    icon: 'icons/reports.svg',
    link: '/'
  },
  {
    title: 'Quiero comprar',
    caption: '',
    icon: 'icons/purchasing.svg',
    link: '/'
  },
  {
    title: 'Mi Inventario',
    caption: '',
    icon: 'icons/inventory.png',
    link: 'product'
  },
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
