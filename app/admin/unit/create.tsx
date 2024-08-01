import { Create, SimpleForm, TextInput, ReferenceInput, NumberInput } from "react-admin";

function UnitCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="Title" />
        <TextInput source="description" label="Description" />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" label="Order" />
      </SimpleForm>
    </Create>
  );
}

export default UnitCreate;
