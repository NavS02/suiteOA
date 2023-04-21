import FormField from "./FormField";
import {
  CheckboxField,
  SelectField,
  ManyToManyField,
  RadioField,
  ManyToOneField,
} from "../models";
import inv_stim from "./inv_stim";

export default {
  collection: "inv_stima",
  fields() {
    return [
      //isrc waiting for select box
      //isrl waiting for select box
      //isrs waiting for select box
      /*new FormField({
                name: 'isrt',
                label: 'Isrt', type: 'manyToMany', value: [],
                relation: 'isrt',
                foreign_key: 'isrt_id',
                preview: (item) => { return `${item?.id ?? '--'} - ${item?.isrt}` },
                fields: isrt.fields,
                filter: (text) => {
                    if(text.trim()==='') return {}
                    return { isrt: { _contains: text } }
                },
            }),*/
      new FormField({
        name: "inv_stis",
        label: "inv_stis",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "inv_stis_ass",
        label: "inv_stis_ass",
        type: "text",
        value: "",
      }),
      new FormField({
        name: "inv_stid",
        label: "inv_stid",
        type: "text",
        value: "",
      }),
      new ManyToOneField({
        name: "inv_stim",
        label: "inv_stim",
        value: null,
        related: "inv_stim",
        type: "manyToOne",
        column: "3",
        preview: (item) => {
          return `${item?.inv_stim}`;
        },
        fields: inv_stim.fields,
        filter: (text) => {
          if (text.trim() === "") return {};
          return { inv_stim: { _contains: text } };
        },
      }),
    ];
  },
  tableFields() {
    return [
      { key: "id", label: "id", sortable: false },
      { key: "inv_stis", label: "inv_stis_stis", sortable: false },
      { key: "inv_stis_ass", label: "inv_stis_ass", sortable: false },
      { key: "inv_stid", label: "inv_stid", sortable: false },
      { key: "inv_stim", label: "inv_stim", sortable: false },
      { key: "actions", label: "actions", sortable: false },

    ];
  },
};
