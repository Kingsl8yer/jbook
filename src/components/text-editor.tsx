import './text-editor.css';
import MDEditor from '@uiw/react-md-editor';
import {useEffect, useRef, useState} from "react";

const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState('# Header');

    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (ref.current && event.target && ref.current.contains(event.target as Node)) {
                console.log('Element clicked on is inside editor');
                return
            }
            console.log('Element clicked is not inside editor')
            setEditing(false);
        };
        document.addEventListener('click', listener, {capture: true});
        return () => {
            document.removeEventListener('click', listener, {capture: true});
        };
    }, []);

    if (editing) {
        return (
            <div
                ref={ref}
                className="text-editor"
            >
                <MDEditor value={value} onChange={(v) => setValue(v || '')}/>
            </div>
        )
    }
    return (
        <div
            onClick={() => setEditing(true)}
            className="text-editor"
        >
            <MDEditor.Markdown source={value}/>
        </div>
    );
};

export default TextEditor;