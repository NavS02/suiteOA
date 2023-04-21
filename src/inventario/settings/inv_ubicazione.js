import FormField from "./FormField";

export default {
  collection: "inv_ubicazione",
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
