import FormField from './FormField'

export default {
    collection: 'inv_piano',
    fields() {
        return [
            new FormField({ name: 'inv_piano', label: 'inv_piano', type: 'text', value: '' }),
            
        ]
    },
    tableFields() {
        return [
            {key:'inv_piano',label:'inv_piano',sortable: false},
            
        ]
    }
}