import React from 'react';

const Doing = (props) => {
    const {items,  current} = props
    const task = current !== null ? items[current].task : null;
    return (
        <div>
            <h2>Currently doing</h2>
            <div className='d-flex flex-column'>
                {task === null ? "march pa bordel" : task}
            </div>
        </div>
    );
}

export { Doing };
