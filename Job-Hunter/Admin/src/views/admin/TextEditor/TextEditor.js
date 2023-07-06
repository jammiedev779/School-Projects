
import { Editor } from '@tinymce/tinymce-react';
import React,{ forwardRef } from 'react';

const  TextEditor=forwardRef((props,ref)=> {   
    return (
        <>
            <Editor
                apiKey='vxpbg4o339okjy4cxmwcyn70n6ja0xy8s5i9hsh4jk3t05q4'
                onInit={(evt, editor) => ref.current = editor}
                initialValue={props.defaultValue}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </>
    );
})

export default TextEditor;