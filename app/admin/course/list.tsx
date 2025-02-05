import { List, Datagrid, TextField } from "react-admin";

function CourseList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="imageSrc" />
      </Datagrid>
    </List>
  );
}

export default CourseList;
