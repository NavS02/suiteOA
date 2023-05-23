import {
  FormField,
  SelectField,
  ManyToManyField,
  RadioField,
  ManyToOneField,
  File,
  Image,
} from "../models";
//ftax
//ftap
import ftax from "./fta/ftax";
import ftap from "./fta/ftap";

export default {
  collection: "fta",
  fields() {
    return [
      new ManyToOneField({
        name: "ftax",
        label: "Genere",
        value: null,
        related: "ftax",
        type: "manyToOne",
        voc: "close",
        preview: (item) => {
          return `${item?.ftax}`;
        },
        fields: ftax.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { ftax: { _contains: text } };
        },
      }),
      new ManyToOneField({
        name: "ftap",
        label: "Tipo",
        value: null,
        related: "ftap",
        type: "manyToOne",
        voc: "open",
        preview: (item) => {
          return `${item?.ftap}`;
        },
        fields: ftap.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { ftap: { _contains: text } };
        },
      }),
      new FormField({ name: "ftaa", label: "Autore", type: "text", value: "" }),
      new FormField({ name: "ftad", label: "Data", type: "text", value: "" }),
      new FormField({ name: "ftae", label: "Ente propietario", type: "text", value: "" }),
      new FormField({ name: "ftan", label: "Codice", type: "text", value: "" }),
      new FormField({ name: "ftat", label: "Note", type: "text", value: "" }),
      new FormField({ name: "ftaf", label: "Formato", type: "text", value: "" }),

    ];
  },

  tableFields() {
    return [
      { key: "id", label: "ID", sortable: false },
      { key: "ftan", label: "ftan", sortable: true },
      { key: "ftad", label: "Ftad", sortable: true },
      { key: "actions", label: "Actions", sortable: false },
    ];
  },
};
