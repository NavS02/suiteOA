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
            new FormField({ name: 'inv_stis', label: 'inv_stis', type: 'text', value: '' }),
            new FormField({ name: 'inv_stid', label: 'inv_stid', type: 'text', value: '' }),
            new FormField({ name: 'inv_stis_ass', label: 'inv_stis_ass', type: 'text', value: '' }),
            
        ]
    },
    tableFields() {
        return [
            {key:'inv_stis',label:'inv_stis',sortable: false},
            {key:'inv_stid',label:'inv_stid',sortable: false},
            {key:'inv_stis_ass',label:'inv_stis_ass',sortable: false},

        { key: "actions", label: "Azione", sortable: false },

            
        ]
    }
}