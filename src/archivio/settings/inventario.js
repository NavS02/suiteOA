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
    collection: 'inventario',
    fields() {
        return [
            new FormField({ name: 'invn', label: 'Numero', type: 'text', value: '' }),
            new FormField({ name: 'invd', label: 'Data', type: 'text', value: '' }),
            new FormField({ name: 'invc', label: 'Collocazione', type: 'text', value: '' }),
           
        ]
    }
}