import FormField from '../FormField'


export default {
    collection: 'prvc',
    fields() {
        return [
            
            
            new FormField({ name: 'prvc', label: 'Comune', type: 'text', value: '' }),
            
           
        ]
    }
}