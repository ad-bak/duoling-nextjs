import { Create, SimpleForm, TextInput, ReferenceInput, NumberInput } from "react-admin";

function LessonCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="Title" />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" label="Order" />
      </SimpleForm>
    </Create>
  );
}

export default LessonCreate;
