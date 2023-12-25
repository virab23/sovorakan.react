function Toduitem({todu, onChange, onDelet}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todu.isCompleted}  onChange={(e)=>{
                    onChange({
                        ...todu,
                        isCompleted: e.target.checked
                    })
                }}/>
                {todu.text}
                <button onClick={()=>{
                    onDelet(todu)
                }}>X</button>
            </label>
        </div>
    )
}

export default Toduitem