import { List, Datagrid, TextField, BooleanField, ReferenceField, NumberField } from "react-admin";

function ChallengeOptionList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challenges" />
        <TextField source="imageSrc" />
        <TextField source="audioSrc" />
      </Datagrid>
    </List>
  );
}

export default ChallengeOptionList;
