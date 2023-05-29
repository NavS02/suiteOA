import {
  FormField,
  SelectField,
  ManyToManyField,
  RadioField,
  ManyToOneField,
  File,
  Image,
} from "../../models";

import inv_oggetto from "./inv_oggetto";
import inv_materia from "./inv_materia";
import inv_stima from "./inv_stima";
import inv_ubicazione from "./inv_ubicazione";
import inv_piano from "./inv_piano";
import inv_sala from "./inv_sala";

export default {
  collection: "inventario",
  fields() {
    return [
      new Image({
        name: "icona",
        label: "Icona",
        fit: "contain",
        width: 100,
        height: 100,
        quality: 10,
        column: 12,
      }),
      new FormField({
        name: "invn",
        label: "Invn",
        type: "text",
        value: "",
        column: 3,
      }),
      new FormField({
        name: "altri_codici",
        label: "Altri codici",
        type: "text",
        value: "",
        column: 3,
      }),
      new FormField({
        name: "quantita",
        label: "Quantità",
        type: "text",
        value: "",
        column: 3,
      }),
      new FormField({
        name: "dismesso",
        label: "Dismesso",
        type: "toggle",
        value: "",
        column: 3,
      }),

      new ManyToOneField({
        name: "inv_oggetto",
        label: "Oggetto",
        value: null,
        related: "inv_oggetto",
        type: "manyToOne",
        column: "4",
        preview: (item) => {
          return `${item?.inv_oggetto}`;
        },
        fields: inv_oggetto.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { inv_oggetto: { _contains: text } };
        },
      }),

      new FormField({
        name: "soggetto",
        label: "Soggetto",
        type: "text",
        value: "",
        column: "4",
      }),
      new FormField({
        name: "autore",
        label: "Autore",
        type: "text",
        value: "",
        column: "4",
      }),

      new ManyToManyField({
        name: "inv_materia",
        label: "Materia",
        value: [],
        column: "4",
        related: "inv_materia",
        collection: "inv_materia",
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

      new FormField({
        name: "data",
        label: "Cronologia",
        type: "text",
        value: "",
        column: "4",
      }),
      new FormField({
        name: "misure",
        label: "Misure",
        type: "text",
        value: "",
        column: "4",
      }),
      new FormField({
        name: "descrizione",
        label: "Descrizione",
        type: "textarea",
        value: "",
      }),
      new ManyToOneField({
        name: "inv_ubicazione",
        label: "Ubicazione",
        value: null,
        related: "inv_ubicazione",
        type: "manyToOne",
        column: "4",

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
        label: "Piano",
        value: null,
        related: "inv_piano",
        type: "manyToOne",
        column: "4",

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
        label: "Sala",
        value: null,
        related: "inv_sala",
        type: "manyToOne",
        column: "4",

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
        label: "Parete",
        type: "text",
        value: "",
        column: "4",
      }),
      new FormField({
        name: "ubi_specifica",
        label: "Specifiche",
        type: "text",
        value: "",
        column: "4",
      }),
      new FormField({
        name: "deposito",
        label: "Deposito",
        type: "toggle",
        value: "",
        column: "4",
      }),
      new FormField({
        name: "conservazione",
        label: "Conservazione",
        type: "text",
        value: "",
        column: "4",
      }),
      new FormField({
        name: "provenienza",
        label: "Provenienza",
        type: "text",
        value: "",
        column: "4",
      }),
      new FormField({
        name: "restauro",
        label: "Restauro",
        type: "text",
        value: "",
        column: "4",
      }),
      new FormField({
        name: "mostre",
        label: "Mostre",
        type: "text",
        value: "",
        column: "4",
      }),
      new FormField({
        name: "prestito",
        label: "Prestito",
        type: "text",
        value: "",
        column: "4",
      }),

      new ManyToManyField({
        name: "inv_stima",
        label: "Stima",
        value: [],
        column: "4",
        related: "inv_stima",
        collection: "inv_stima",
        foreign_key: "inv_stima_id",
        preview: (item) => {
          return `${item?.inv_stima}`;
        },
        fields: inv_stima.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { inv_stima: { _contains: text } };
        },
      }),
      new FormField({
        name: "acquisizione",
        label: "Acquisizione",
        type: "text",
        value: "",
        column: "6",
      }),

      new FormField({
        name: "proprieta",
        label: "Proprieta",
        type: "text",
        value: "",
        column: "6",
      }),
      new FormField({
        name: "note",
        label: "Note",
        type: "textarea",
        value: "",
        column: "12",
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
