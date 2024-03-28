import React ,{ useState ,useEffect}from "react"
import {Link} from "react-router-dom"
function Registry(){
    const [registryData,setRegistrydata] = useState([])
    const [textInput,setTextInput] = useState("")
    const[error,setError] = useState(false)
    const addItem = (e) => {
            e.preventDefault()
            //Since registry Data is only read-only we need to create a temp variable
            const tempData = [...registryData]
            tempData.push(textInput)
            setRegistrydata(tempData)
            setTextInput("")
           
    }
    const removeItem = (index) =>{
        let newData = [...registryData]
        newData.splice(index,1)
        setRegistrydata(newData)
    }
    const editItem = (index) =>{
        let newData = [...registryData]
        newData[index]=textInput
        setRegistrydata(newData)
    }

    useEffect(()=> {

        if(textInput.length>10) setError(true);
        else setError(false);
         // This triggers a re-render and updates the count

    },[textInput])
    console.log(registryData)
    return(
        <div >
            <div>
            <h1>REACT APP REGISTRY</h1>
            </div>
            <Link to ="/">
                <h2>Click here to go to Home</h2>
            </Link>
            <form onSubmit={addItem}>
              <div>  <label>
                <span style={{ fontWeight: 'bolder' }}>TEXT INPUT:</span>
                     <input type="text"   value={textInput} onChange={(e)=>setTextInput(e.target.value)}/>
            </label>
            </div>

            <h4><input type = "submit" value = "Submit"/> </h4>
            </form>
            {error? <span style={{color:"red"}}>Error Occured!</span> : null}
            
            {
                registryData.map((item,index)=>{
                    return(
                        <div>
                        <l1 key ={index}>{item} 
                        <button onClick={() => removeItem(index)}> Remove </button>
                         <button onClick={()=>editItem(index)}> Update </button>
                       </l1>
                       </div>
                    )
                })
            }

        </div>
    )
}

export default Registry;