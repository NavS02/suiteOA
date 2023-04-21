import FormField from "./FormField";

export default {
  collection: "inv_oggetto",
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
