import Toduitem from "./Toduitem"

function ToduList({todus, onChange, onDelet}) {
    return (
         <div className="adde">
            {
                todus.map((todu)=>{
                    return (
                       <Toduitem 
                       key={todu.id}
                        todu={todu}
                        onChange={onChange}
                        onDelet={onDelet}
                        />
                    )
                })
            }
         </div>
    )
}

export default ToduList