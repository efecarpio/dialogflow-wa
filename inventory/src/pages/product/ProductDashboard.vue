<template>
  <div class="d-flex full-height flex-column width-100" style="padding:10px;">
    <span class="text-h5 text-weight-bold text-blue">Mi Productos</span>
    <div class="row q-pt-lg">
      <div class="col-5">
        <q-input outlined
          bottom-slots
          v-model="search"
          label="Buscar producto">

          <template v-slot:prepend>
            <q-icon name="search" />
          </template>

          <template v-slot:after>
            <q-btn color="blue" no-caps
              label="Buscar"
              @click="searchProduct(search)"/>
          </template>
        </q-input>
      </div>
      <div class="col-4 text-center">
        <div class="q-gutter-md">
          <div class="row">
            <div class="col-6 q-px-md">
              <q-select style="font-size:13px;"
                clearable
                v-model="categoria"
                :options="['']"
                :display-value="`Categoría: ${categoria ? categoria : ''}`">
              </q-select>
            </div>
            <div class="col-6">
              <q-select style="font-size:13px;"
                clearable
                v-model="sort"
                :options="['Nombre', 'Precio más bajo']"
                :display-value="`Ordenar por: ${sort ? sort : ''}`"
                @update:model-value="retrieveProducts()"
                @clear="retrieveProducts()">
              </q-select>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 text-right">
        <q-btn color="blue" no-caps
          label="Crear Producto"
          icon-right="add"
          @click="showProductDialog()" />
      </div>
    </div>

    <div class="d-flex flex-column flex-1">
      <div class="row">
        <div class="col-3 col-xs-2" style="padding-bottom:10px;"
          v-for="product in products"
          :key="product.id">

          <product-card
            :product="product"
            @click="showProductDialog(product)"></product-card>

        </div>
      </div>
    </div>

    <q-dialog v-model="productDialog">
      <product-dialog :product="productSelected"
        @saved="appendListProduct"></product-dialog>
    </q-dialog>

  </div>
</template>
<script src="./product-dashboard.js"></script>
<style src="./product-dashboard.scss" lang="scss"></style>
