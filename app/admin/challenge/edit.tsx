import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin";

function ChallengeEdit() {
  return (
    <Edit>
      <SimpleForm>
        {/* hide id */}
        <TextInput source="id" label="Id" hidden={true} disabled={true} />
        <TextInput source="question" label="Question" />
        <SelectInput
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
        <ReferenceInput source="lessonId" reference="lessons" />
      </SimpleForm>
    </Edit>
  );
}

export default ChallengeEdit;
