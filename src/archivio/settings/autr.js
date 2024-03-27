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
    collection: 'autr',
    fields() {
        return [
            new FormField({ name: 'autr', label: 'AUTR-Riferimento all\'intervento', type: 'text', value: '' }),
        ]
    }
}