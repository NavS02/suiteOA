import FormField from "./FormField";
import inv_oggetto from "./inv_oggetto";
import inv_materia from "./inv_materia";
import inv_stima from "./inv_stima";
import inv_ubicazione from "./inv_ubicazione";
import inv_piano from "./inv_piano";
import inv_sala from "./inv_sala";



import { ManyToOneField } from "../models";

export default {
  collection: "inventario",
  fields() {
    return [
      new FormField({ name: "invn", label: "Invn", type: "text", value: "" }),
      new FormField({
        name: "dismesso",
        label: "dismesso",
        type: "toggle",
        value: "",
        // column:4
      }),

      new FormField({
        name: "quantita",
        label: "Quantita",
        type: "text",
        value: "",
      }),
      new ManyToOneField({
        name: "inv_oggetto",
        label: "inv_oggetto",
        value: null,
        related: "inv_oggetto",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.inv_oggetto}`;
        },
        fields: inv_oggetto.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { nome: { _contains: text } };
        },
      }),

      new FormField({
        name: "soggetto",
        label: "Soggetto",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "descrizione",
        label: "Descrizione",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "autore",
        label: "autore",
        type: "text",
        value: "",
      }),

      new FormField({
        name: "inv_materia",
        label: "inv_materia",
        type: "manyToMany",
        value: [],
        column: "6",

        relation: "inv_materia",
        foreign_key: "inv_materia_id",
        preview: (item) => {
          return `${item?.inv_materia}`;
        },
        fields: inv_materia.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { inv_materia: { _contains: text } };
        },
      }),
      new FormField({ name: "data", label: "data", type: "text", value: "" }),
      new FormField({
        name: "misure",
        label: "misure",
        type: "text",
        value: "",
      }),

      new FormField({
        name: "inv_stima",
        label: "inv_stima",
        type: "manyToMany",
        value: [],
        column: "6",

        relation: "inv_stima",
        foreign_key: "inv_stima_id",
        preview: (item) => {
          return `${item?.inv_stis + "," + item?.inv_stis_ass}`;
        },
        fields: inv_stima.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { inv_stima: { _contains: text } };
        },
      }),

      new FormField({
        name: "deposito",
        label: "deposito",
        type: "toggle",
        value: "",
      }),

      new ManyToOneField({
        name: "inv_ubicazione",
        label: "inv_ubicazione",
        value: null,
        related: "inv_ubicazione",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.inv_ubicazione}`;
        },
        fields: inv_ubicazione.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { inv_ubicazione: { _contains: text } };
        },
      }),

      new ManyToOneField({
        name: "inv_piano",
        label: "inv_piano",
        value: null,
        related: "inv_piano",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.inv_piano}`;
        },
        fields: inv_piano.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { inv_piano: { _contains: text } };
        },
      }),

      new ManyToOneField({
        name: "inv_sala",
        label: "inv_sala",
        value: null,
        related: "inv_sala",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.inv_sala}`;
        },
        fields: inv_sala.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { inv_sala: { _contains: text } };
        },
      }),
      new FormField({
        name: "parete",
        label: "parete",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "ubi_specifica",
        label: "ubi_specifica",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "conservazione",
        label: "conservazione",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "preovenienza",
        label: "preovenienza",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "acquisizione",
        label: "acquisizione",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "restauro",
        label: "restauro",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "mostre",
        label: "mostre",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "prestito",
        label: "prestito",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "propieta",
        label: "propieta",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "note",
        label: "note",
        type: "textarea",
        value: "",
      }),
    ];
  },
  tableFields() {
    return [
      { key: "id", label: "ID", sortable: false },
      { key: "invn", label: "INVN", sortable: false },
      { key: "quantita", label: "Quantita", sortable: false },
      { key: "soggetto", label: "Soggetto", sortable: false },
      { key: "autore", label: "Autore", sortable: false },
      { key: "actions", label: "actions", sortable: false },
    ];
  },
};
