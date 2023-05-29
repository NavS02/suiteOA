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
    collection: 'inv_sala',
    fields() {
        return [

            new FormField({ name: 'inv_sala', label: 'inv_sala', type: 'text', value: '' }),
           
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable: false},

            {key:'inv_sala',label:'inv_sala',sortable: false},
            {key:'actions',label:'actions',sortable: false},
            
        ]
    }
}