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

            new FormField({ name: 'inv_stim', label: 'inv_stim', type: 'text', value: '' }),
            
        ]
    },
    tableFields() {
        return [
            {key:'inv_stim',label:'inv_stima',sortable: false},
        { key: "actions", label: "actions", sortable: false },

            
        ]
    }
}