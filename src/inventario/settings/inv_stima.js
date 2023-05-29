import {
    FormField,
    SelectField,
    ManyToManyField,
    RadioField,
    ManyToOneField,
    File,
    Image,
  } from "../models";
export default {
    collection: 'inv_stima',
    fields() {
        return [

            new FormField({ name: 'inv_stim', label: 'Stima', type: 'text', value: '' }),
            
        ]
    },
    tableFields() {
        return [
            {key:'inv_stim',label:'Stima',sortable: false},
        { key: "actions", label: "Azione", sortable: false },

            
        ]
    }
}