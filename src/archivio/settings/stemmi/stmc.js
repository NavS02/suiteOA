import FormField from '../FormField'


export default {
    collection: 'stmc',
    fields() {
        return [
            
            
            new FormField({ name: 'stmc', label: 'Classe di appartenenza', type: 'text', value: '' }),
            
           
        ]
    }
}