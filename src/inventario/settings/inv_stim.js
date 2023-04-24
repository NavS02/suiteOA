import FormField from './FormField'

export default {
    collection: 'inv_stim',
    fields() {
        return [

            new FormField({ name: 'inv_stim', label: 'inv_stim', type: 'text', value: '' }),
            
        ]
    },
    tableFields() {
        return [
            {key:'inv_stim',label:'inv_stima',sortable: false},
            
        ]
    }
}