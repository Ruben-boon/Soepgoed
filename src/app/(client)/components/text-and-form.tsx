import styles from "./text-and-form.module.scss";
import { BlockProps } from "../interfaces/interfaces";
import { PortableText } from "@portabletext/react";
import Form from "./form";

interface TextAndFormProps {
  content: BlockProps;
}

const TextAndForm: React.FC<TextAndFormProps> = ({ content }) => {
  return (
    <div className={styles.textAndForm}>
      <div className={` ${styles.container} ${"container"} ${content.layout}`}>
        {content.content && (
          <div className={`${styles.textGroup} ${"textGroup"}`}>
            <PortableText value={content.content} />
          </div>
        )}
        {content.formFields && <Form formFieldsAr={content.formFields} formHeading={content.heading}></Form>}
      </div>
    </div>
  );
};

export default TextAndForm;
