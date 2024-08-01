import { Edit, SimpleForm, TextInput, ReferenceInput, NumberInput } from "react-admin";

function LessonEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id" />
        <TextInput source="title" label="Title" />
        <ReferenceInput source="unitId" reference="unitId" />
        <NumberInput source="order" label="Order" />
      </SimpleForm>
    </Edit>
  );
}

export default LessonEdit;
