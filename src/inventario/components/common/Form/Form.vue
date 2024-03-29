<template>
  <!-- header -->
  <slot name="header" :data="data" :fields="fields"></slot>

  <div class="row">
    <template v-for="(field, index) in fields" :key="index">
      <slot
        :name="`field-${field.name}`"
        :data="data"
        :fields="fields"
        :field="field"
      >
        <template v-if="field.type == 'manyToMany'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <ManyToMany v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'oneToMany'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <OneToMany v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'manyToOne'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <ManyToOne v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'checkbox'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <Checkbox v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'toggle'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <Toggle v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'radio'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <Radio v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'select'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <SelectDropdown v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'simple-select'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <SelectSimple v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'file'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <File v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'files'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <Files v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'image'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <Image v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'divider'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <Divider />
          </div>
        </template>
        <template v-else-if="field.type == 'external-link'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <ExternalLinkInput v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'markdown'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <MdEditor v-model="field.value" />
          </div>
        </template>
        <template v-else-if="field.type == 'map'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <Map v-model="field.value" :field="field" />
          </div>
        </template>
        <template v-else-if="field.type == 'richtext'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <div>
              <label
                :for="`field-${field.name}`"
                class="form-label"
                v-html="field.label"
              ></label>
              <editor
                v-model="field.value"
                api-key="7vy8ie0rxcb6wxvm6pwpvw6pqh74qjoq3beib9fpf8gd9l75"
                :init="{
                  height: 500,
                  menubar: false,
                  branding: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor ',
                    'searchreplace visualblocks  fullscreen',
                    'insertdatetime media table paste  help wordcount ',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic underline  forecolor backcolor | image link media  | \
           alignleft aligncenter alignright alignjustify table | \
           bullist numlist outdent indent | removeformat | help preview',
                }"
                :disabled="field.edit === 'false'"
                style="background-color: white"
              />
            </div>
          </div>
        </template>
        <template v-else-if="field.type == 'biglabel'">
          <h4>{{ field.label }}</h4>
        </template>
        <template v-else-if="field.type == 'textarea'">
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <label
              :for="`field-${field.name}`"
              class="form-label"
              v-html="field.label"
            ></label>
            <textarea
              :disabled="field.edit === 'false'"
              v-if="field.special == true"
              :type="field.type"
              style="background-color: lightyellow"
              :id="`field-${field.name}`"
              class="form-control"
              rows="5"
              v-model="field.value"
            ></textarea>

            <textarea
              v-else
              :type="field.type"
              :id="`field-${field.name}`"
              class="form-control"
              rows="5"
              v-model="field.value"
              :disabled="field.edit === 'false'"
              style="background-color: white"
            ></textarea>
          </div>
        </template>

        <template v-else>
          <div id="alignp-1" :class="`col-md-${field.column}`">
            <StandardInput v-model="field.value" :field="field" />
          </div>
        </template>
      </slot>
    </template>
    <!-- extra content in the body -->
    <slot :data="data" :fields="fields"></slot>
  </div>
  <!-- {{ data }} -->
  <!-- footer -->
  <slot name="footer" :data="data" :fields="fields"></slot>
</template>

<script setup>
import { toRefs, computed, ref } from "vue";
import {
  ManyToMany,
  OneToMany,
  ManyToOne,
  Toggle,
  Checkbox,
  SelectDropdown,
  SelectSimple,
  Radio,
  File,
  Files,
  Image,
  Divider,
  StandardInput,
  ExternalLinkInput,
  Map,
} from ".";
import Editor from "@tinymce/tinymce-vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
const text = ref("# Hello Editor");

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  fields: { type: Array, default: [] },
  // modelValue: { type: [Array,Object], default: [] },
});
const { fields } = toRefs(props);

const data = () => {
  const onlyDirty = fields.value.filter((field) => field.dirty === true);
  const keyValuesList = onlyDirty.map((field) => [field.name, field.value]);
  const _data = Object.fromEntries(keyValuesList);
  // emit('update:modelValue', _data)
  return _data;
}; // form data (will be passed as prop in the slots)
</script>

<style scoped></style>
