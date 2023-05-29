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
  collection: "inv_ubicazione",
  fields() {
    return [

      new FormField({
        name: "inv_ubicazione",
        label: "inv_ubicazione",
        type: "text",
        value: "",
      }),
    ];
  },
  tableFields() {
    return [
      { key: "id", label: "ID", sortable: false },
      { key: "inv_ubicazione", label: "inv_ubicazione", sortable: false },
      { key: "actions", label: "actions", sortable: false },
    ];
  },
};