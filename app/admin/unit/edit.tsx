import { Edit, SimpleForm, TextInput, ReferenceInput, NumberInput } from "react-admin";

function UnitEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id" />
        <TextInput source="title" label="Title" />
        <TextInput source="description" label="Description" />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" label="Order" />
      </SimpleForm>
    </Edit>
  );
}

export default UnitEdit;
