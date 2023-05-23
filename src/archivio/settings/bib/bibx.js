import FormField from '../FormField'


export default {
    collection: 'bibx',
    fields() {
        return [

            new FormField({ name: 'bibx', label: 'Genere', type: 'text', value: '' }),
            
           
        ]
    },
        
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'biba',label:'Biba',sortable: true},
            {key:'bibc',label:'Bibc',sortable: true},
             {key:'actions',label:'Actions',sortable: false},
            
        ]
    }
}