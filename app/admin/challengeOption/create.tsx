import { Create, SimpleForm, TextInput, ReferenceInput, BooleanInput } from "react-admin";

function ChallengeOptionCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="text" label="Question" />
        <BooleanInput source="correct" label="correct" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image" />
        <TextInput source="audioSrc" label="Audio" />
      </SimpleForm>
    </Create>
  );
}

export default ChallengeOptionCreate;
