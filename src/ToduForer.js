function ToduForer({todus,isCom}) {
   const comlitedSize = todus.filter((todu) => todu.isCompleted).length
    return (
        <div>
            <span className="cd"> {comlitedSize}/{todus.length} Completed</span>
            <button onClick={isCom}>Clear C...</button>
        </div>
    )
}

export default ToduForer