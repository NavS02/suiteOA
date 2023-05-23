import FormField from '../FormField'


export default {
    collection: 'prct',
    fields() {
        return [
            
            
            new FormField({ name: 'prct', label: 'Tipologia', type: 'text', value: '' }),
            
           
        ]
    }
}