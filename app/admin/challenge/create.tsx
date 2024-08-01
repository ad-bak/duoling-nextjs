import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin";

function ChallengeCreate() {
  return (
    <Create>
      <SimpleForm>
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
    </Create>
  );
}

export default ChallengeCreate;
