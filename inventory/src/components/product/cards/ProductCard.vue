<template>
  <q-card class="product-card q-hoverable cursor-pointer" v-ripple
    style="min-height: 115px;">
    <q-card-section>
      <div class="row items-center">
        <div class="col-4">
          <img :src="product.image"
            style="heigth:200px;width:65px;max-heigth:200px;"/>
        </div>
        <div class="col-8">
          <div class="text-capitalize ellipsis-2-lines"
            style="font-size: 0.75rem;">
            {{product.descrip}}
          </div>
          <strong>{{product.valor}}</strong> x unid<br>
          <small class="text-weight-bold" style="font-size:65%;">
            <div>Codigo: #{{product.codart}}</div>
            <div>
              <q-icon name="info" /> Disponible {{product.stock}} unid.
            </div>
          </small>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script src="./product-card.js"></script>
<style src="./product-card.scss" lang="scss"></style>
