import {useActions} from "../hooks/use-actions";

interface ActionBarProps {
    id: string;
}


const ActionBar: React.FC<ActionBarProps> = ({id}) => {
    const {moveCell, deleteCell} = useActions();
    return (
        <div>
            <button onClick={() => moveCell(id, 'up')} className="button is-primary is-small">
                <span className="icon">
                    <i className="fas fa-arrow-up"/>
                </span>
            </button>

            <button onClick={() => moveCell(id, 'down')} className="button is-primary is-small">
                <span className="icon">
                    <i className="fas fa-arrow-down"/>
                </span>
            </button>

            <button onClick={() => deleteCell(id)} className="button is-primary is-small">
                <span className="icon">
                    <i className="fas fa-times"/>
                </span>
            </button>
        </div>
    );
};

export default ActionBar;