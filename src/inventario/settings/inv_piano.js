import FormField from './FormField'

export default {
    collection: 'inv_piano',
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
            new FormField({ name: 'inv_piano', label: 'inv_piano', type: 'text', value: '' }),
            
        ]
    },
    tableFields() {
        return [
            {key:'inv_piano',label:'inv_piano',sortable: false},
            
        ]
    }
}