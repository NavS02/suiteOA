import {
  FormField,
  SelectField,
  ManyToManyField,
  RadioField,
  ManyToOneField,
  File,
  Image,
} from "../models";
  import autm from './autm'
  import auts from './auts'
  import autr from './autr'

export default {
    collection: 'autore',
    fields() {
        return [
            new FormField({ name: 'autn', label: 'AUTN-Autore', type: 'text', value: '' }),
            new FormField({ name: 'auta', label: 'AUTA-Dati anagrafici', type: 'text', value: '' }),
            
            new ManyToOneField({
                name: "auts",
                label: "AUTS-Riferimento all\'autore",
                value: null,
                related: "auts",
                type: "manyToOne",
                voc: "open",
        
                preview: (item) => {
                  return `${item?.auts}`;
                },
                fields: auts.fields,
                filter: (text) => {
                  if (text.trim() === "") return {};
                  return { auts: { _contains: text } };
                },
              }),
            new ManyToOneField({
                name: "autr",
                label: "AUTR-Riferimento all\'intervento",
                value: null,
                related: "autr",
                type: "manyToOne",
        
                preview: (item) => {
                  return `${item?.autr}`;
                },
                fields: autr.fields,
                filter: (text) => {
                  if (text.trim() === "") return {};
                  return { autr: { _contains: text } };
                },
              }),

         


            new ManyToManyField({
                name: 'autm',
                label: 'AUTM-Motivazione', value: [],
                related: 'autm',
                foreign_key: 'autm_id',
                voc:'close',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.autm}` },
                fields: autm.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { tipo: { _contains: text } }
                },
            }),
        ]
    },
    tableFields() {
        return [
            {key:'id',label:'ID',sortable:false},
            {key:'autn',label:'AUTN',sortable: true},
            {key:'auta',label:'AUTA',sortable: true},
            {key:'autm',label:'AUTM',sortable: false},
            {key:'actions',label:'Actions',sortable: false},
        ]
    }
}