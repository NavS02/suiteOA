import FormField from '../FormField'


export default {
    collection: 'prvl',
    fields() {
        return [
            
            
            new FormField({ name: 'tcl', label: 'Tipo di localizzazione', type: 'text', value: '' }),
            
           
        ]
    }
}