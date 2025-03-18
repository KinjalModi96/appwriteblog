import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

const RTE = ({ label, name, control, defaultValue = "" }) => {
  useEffect(() => {
    // You can add any additional logic if required to update defaultValue
  }, [defaultValue]);
  const apiKey = "9vdr9z5ljyu29ahaiq8xwph9fdknnz82hmgkz7c8yr4drr0x";
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue} // You can pass your default value here
        render={({ field: { onChange, value } }) => (
          <Editor
            value={value || defaultValue}  // Controlled value or fallback to defaultValue
            apiKey={apiKey}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange} // Update form state on change
          />
        )}
      />
    </div>
  );
};

export default RTE;
