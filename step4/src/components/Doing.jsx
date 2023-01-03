import React from 'react';

const Doing = (props) => {
    const task = props.current !== null ? props.items[props.current].task : null;
    const done = () => {
        const itemsCopyList = [...props.items]
        console.log(itemsCopyList[props.current])
        itemsCopyList[props.current].isDone = true;
        props.setItems(itemsCopyList);
        props.setCurrent(null)
    }
    return (
        <div>
            <h2>Currently doing</h2>
            <div className='d-flex flex-column'>
                {task === null ? "march pa bordel" : task}
            </div>
            <button
            className='btn btn-primary'
            onClick={() => done()}
            disabled={!task}
            >
                I'm done
            </button>
        </div>
    );
}

export { Doing };
