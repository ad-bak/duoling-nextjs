import { Create, SimpleForm, TextInput } from "react-admin";

function CourseCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="Title" />
        <TextInput source="imageSrc" label="Image" />
      </SimpleForm>
    </Create>
  );
}

export default CourseCreate;
