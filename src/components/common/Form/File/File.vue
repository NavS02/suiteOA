<template>
    <div v-if="modelValue?.id">
        <div class="d-flex flex-row align-items-end">
            <div class="me-2">
                <template v-if="isImage(asset)">
                    <img :src="thumbnail(asset)"/>
                </template>
                <template v-else>
                    <font-awesome-icon icon="fa-solid fa-file" fixed-width :style="{height: `100px`, width: `100px`}"/>
                </template>
            </div>
            <div class="d-flex flex-column">
                <FileMetadata :file="asset" />
                <FileActions :file="asset" 
                    @downloadFile="onDownloadClicked"
                    @showFile="onShowAssetClicked"
                    @deleteFile="onDeleteFileClicked"
                />
            </div>
        </div>
    </div>
    <template v-else>
        <UploadModal @filesSelected="onFilesSelected">
            <template #button-text>Caricare file</template>
        </UploadModal>
    </template>
</template>

<script setup>
import { toRefs, provide } from 'vue'
import { File } from '../../../../models'
import { useAsset } from '../../../../utils'
import { accessToken, baseURL } from '../../../../API'
import UploadModal from './UploadModal.vue'
import FileMetadata from '../../Upload/FileMetadata.vue';
import FileActions from '../../Upload/FileActions.vue';

provide('multiple', false) // this will be injected in ChooseFilesButton
const {isImage, url, thumbnail} = useAsset(baseURL,accessToken)

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: { type: Object, default: () => ({}) },
    field: { type: File, default: null },
})

const {field, modelValue:asset} = toRefs(props)

function deleteAsset() {
    emit('update:modelValue', null)
}

function onDeleteFileClicked(_file) {
    const confirmed = confirm('Sei sicuro di voler eliminare questo elemento?')
    if(!confirmed) return
    deleteAsset()
}

function onShowAssetClicked(_file) {
    let showUrl = url(_file.value, false)
    var win = window.open(showUrl, '_blank')
    win.focus()
}
function onDownloadClicked(_file) {
    let downloadUrl = url(_file.value, true)
    location.href = downloadUrl
}
function onFilesSelected(files) {
    const file = files?.[0]
    if(file) emit('update:modelValue', file)
}

</script>

<style scoped>

</style>