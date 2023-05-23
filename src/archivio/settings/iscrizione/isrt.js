import FormField from '../FormField'


export default {
    collection: 'isrt',
    fields() {
        return [
            
            
            new FormField({ name: 'isrt', label: 'Tipo di caratteri', type: 'text', value: '' }),
            
           
        ]
    }
}