import { Edit, SimpleForm, TextInput } from "react-admin";

function CourseEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id" />
        <TextInput source="title" label="Title" />
        <TextInput source="imageSrc" label="Image" />
      </SimpleForm>
    </Edit>
  );
}

export default CourseEdit;
