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
    collection: 'autm',
    fields() {
        return [
            new FormField({ name: 'autm', label: 'AUTM-Tipo', type: 'text', value: '' }),
        ]
    }
}