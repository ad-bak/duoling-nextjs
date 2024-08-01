import { List, Datagrid, TextField, SelectField, ReferenceField, NumberField } from "react-admin";

function ChallengeList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="question" />
        <SelectField
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
          ]}
        />
        <ReferenceField source="lessonId" reference="lessons" />
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
}

export default ChallengeList;
