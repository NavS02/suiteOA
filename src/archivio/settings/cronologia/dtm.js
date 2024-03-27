import {
    FormField,
    SelectField,
    ManyToManyField,
    RadioField,
    ManyToOneField,
    File,
    Image,
  } from "../../models";

export default {
    collection: 'dtm',
    fields() {
        return [
            
            
            new FormField({ name: 'dtm', label: 'DTM-Motivazione della datazione', type: 'text', value: '' }),
            
           
        ]
    }
}