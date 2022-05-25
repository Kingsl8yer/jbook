import {useTypedSelector} from "../hooks/use-type-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import {Fragment} from 'react';

const CellList: React.FC = () => {
    const cells = useTypedSelector(({cells: {order, data}}) => {
        return order.map((id) => {
            return data[id];
        });
    });

    const renderedCells = cells.map(cell =>
        <Fragment key={cell.id}>
            <AddCell nextCellId={cell.id}/>
            <CellListItem cell={cell}/>
        </Fragment>
    );

    return <div>
        {renderedCells}
        <AddCell nextCellId={null}/>
    </div>
};

export default CellList;