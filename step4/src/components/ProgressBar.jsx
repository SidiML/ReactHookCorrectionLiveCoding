const ProgressWidth = (items) => {
    // const {items} = props
    // console.log(items)
    let progress = 0
    items.forEach(item => {
        if(item.isDone) {
            progress++
        }
    });

    return {width: progress * 100 / items.length + "%", background: 'var(--blue)'} 
}

const styleBar = {
    height: '20px',
    background: '#eee',
}

const ProgressBar = (props) => {
    const progressStyleBar = ProgressWidth(props.items)
    return (
        <div className="d-flex mt-3 mb-4">
            <h6 className="mr-3">Progress:</h6>
            <div className="d-flex mb-3 w-100" style={styleBar}>
                <div className="h-100 align-self-end" style={progressStyleBar}></div>
            </div>
        </div>
    )
}

export {ProgressBar}
