<template>

  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section>
      <div class="text-h6">Producto</div>
    </q-card-section>

    <q-separator />

    <q-card-section style="max-height: 50vh" class="scroll">
      <q-form class="q-gutter-md">
        <div class="q-pa-md">
          <div class="row">
            <div class="col-12">
              <q-input
                outlined
                v-model="product.descrip"
                label="Nombre del producto *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Por favor ingrese un nombre']"
              />
            </div>

            <div class="col-6 q-pr-md">
              <q-input
                outlined
                type="number"
                v-model="product.valor"
                label="Precio *"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Por favor ingrese un precio para el producto',
                  val => val > 0 && val < 1000 || 'Ingrese un valor real.'
                ]"
              />
            </div>

            <div class="col-6 q-pl-md">
              <q-input
                outlined
                type="number"
                v-model="product.peso"
                label="Peso *"
                lazy-rules
                :rules="[
                  val => val !== null && val !== '' || 'Por favor ingrese el peso del producto',
                  val => val > 0 && val < 1000 || 'Ingrese un valor real.'
                ]"
              />
            </div>

            <div class="col-6 q-pr-md">
              <div class="q-gutter-sm">
                <q-item-label>Presentación *</q-item-label>
                <q-radio
                  v-model="product.codprecan"
                  val="PQ"
                  label="Paquete"/>
                <q-radio
                  v-model="product.codprecan"
                  val="CJ"
                  label="Caja"/>
              </div>
            </div>

            <div class="col-6 q-pl-md">
              <div class="q-gutter-sm">
                <q-item-label>Unidad de medida *</q-item-label>
                <q-radio
                  v-model="product.codpreres"
                  val="UN"
                  label="Unidad"/>
              </div>
            </div>

            <div class="col-12">
              <q-field outlined label="Stock" stack-label>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">
                    {{product.stock}}
                  </div>
                </template>
              </q-field>
            </div>

          </div>
        </div>
      </q-form>

      <q-form class="q-gutter-md q-px-md">
        <q-file outlined
          stack-label
          v-model="photo"
          use-chips
          label="Seleccione una imagen para el producto">
          <template v-slot:append>
            <q-icon name="attach_file" />
          </template>
        </q-file>
      </q-form>
    </q-card-section>
    <q-separator />

    <q-card-actions align="right">
      <q-btn label="Guardar"
        :loading="isSubmitting"
        color="primary" no-caps
        @click="saveProduct()">
        <template v-slot:loading>
          <q-spinner-tail />
        </template>
      </q-btn>
      <q-btn flat label="Cancelar y Cerrar" color="primary" no-caps v-close-popup />
    </q-card-actions>
  </q-card>

</template>

<script src="./product-dialog.js"></script>
