import FormField from './FormField'

export default {
    collection: 'inv_stim',
    fields() {
        return [
            //isrc waiting for select box
            //isrl waiting for select box
            //isrs waiting for select box
            /*new FormField({
                name: 'isrt',
                label: 'Isrt', type: 'manyToMany', value: [],
                relation: 'isrt',
                foreign_key: 'isrt_id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.isrt}` },
                fields: isrt.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { isrt: { _contains: text } }
                },
            }),*/
            new FormField({ name: 'inv_stim', label: 'inv_stim', type: 'text', value: '' }),
            
        ]
    },
    tableFields() {
        return [
            {key:'inv_stim',label:'inv_stima',sortable: false},
            
        ]
    }
}