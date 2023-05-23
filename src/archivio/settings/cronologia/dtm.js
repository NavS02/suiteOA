import FormField from '../FormField'


export default {
    collection: 'dtm',
    fields() {
        return [
            
            
            new FormField({ name: 'dtm', label: 'Motivazione della datazione', type: 'text', value: '' }),
            
           
        ]
    }
}