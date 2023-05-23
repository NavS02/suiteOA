import FormField from "./FormField";

export default {
  collection: "pref",
  fields() {
    return [
      new FormField({
        name: "id_opera",
        label: "mstfinid opera",
        type: "text",
        value: "",
      }),
    ];
  },

  tableFields() {
    return [
      { key: "id_opera", label: "id opera", sortable: false },
      { key: "date_created", label: "Data", sortable: false },

      { key: "actions", label: "Azioni", sortable: false },
    ];
  },
};
