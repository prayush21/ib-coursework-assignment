import EssayUploadForm from "./essay-upload-form";

type Props = {};

export default function CourseworkUpload({}: Props) {
  return (
    <section className=" bg-upload-container rounded-lg p-2">
      <EssayUploadForm />
    </section>
  );
}
