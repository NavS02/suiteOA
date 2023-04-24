import FormField from "./FormField";

export default {
  collection: "inv_materia",
  fields() {
    return [
      new FormField({
        name: "inv_materia",
        label: "inv_materia",
        type: "text",
        value: "",
      }),
    ];
  },
  tableFields() {
    return [
      { key: "id", label: "ID", sortable: false },
      { key: "inv_materia", label: "inv_materia", sortable: false },
      { key: "actions", label: "actions", sortable: false },
      
    ];
  },
};
