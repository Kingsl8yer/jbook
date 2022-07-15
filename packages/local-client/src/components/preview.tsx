import './preview.css';
import {useEffect, useRef} from "react";

interface PreviewProps {
    code: string;
    err: string;
}


const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
        const handleError = (err) =>{
            const root= document.querySelector('#root');
                root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>'+ err +'</div>';
                throw e;
        };
        window.addEventListener('error', (event)=>{
            event.preventDefault();
            handleError(event.error);
        }, );
          window.addEventListener('message', (event) => {
              try {
                eval(event.data);
              } catch (e) {
                handleError(e)
              }            
          }, false);
        </script>
      </body>
    </html>
  `;


const Preview: React.FC<PreviewProps> = ({code, err}) => {
    const iframe = useRef<any>();

    useEffect(() => {
        iframe.current.srcdoc = html;
        setTimeout(async () => {
            iframe.current.contentWindow.postMessage(code, '*');
        }, 50);

    }, [code]);

    return (
        <div className="preview-wrapper">
            <iframe
                title="preview"
                ref={iframe}
                sandbox="allow-scripts"
                srcDoc={html}
            />
            {err && <div className="preview-error">{err}</div>}
        </div>
    );
};

export default Preview;