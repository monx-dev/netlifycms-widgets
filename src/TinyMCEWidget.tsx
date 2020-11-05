import React from 'react';
import Widget from '@monx/react-netlifycms/dist/Widget';
import { Editor } from '@tinymce/tinymce-react';

interface TinyMCEWidgetProps {
  plugins?: string[];
  toolbar?: string;
  height?: number;
  menubar?: boolean;
}

export const TinyMCEWidget = Widget<string, TinyMCEWidgetProps>(
  ({ onChange, value, params }) => {
    return (
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
        value={value}
        init={{
          height: params.height,
          menubar: params.menubar,
          plugins: params.plugins,
          toolbar: params.toolbar,
        }}
        onEditorChange={(content) => onChange(content)}
      />
    );
  },
  {
    activateFix: true,
  }
);
