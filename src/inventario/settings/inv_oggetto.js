import FormField from "./FormField";

export default {
  collection: "inv_oggetto",
  fields() {
    return [
      new FormField({
        name: "inv_oggetto",
        label: "inv_oggetto",
        type: "text",
        value: "",
      }),
    ];
  },
  tableFields() {
    return [
      { key: "id", label: "ID", sortable: false },
      { key: "inv_oggetto", label: "inv_oggetto", sortable: false },
      { key: "actions", label: "actions", sortable: false },
    ];
  },
};
