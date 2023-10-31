import React,{useState,useRef,useEffect} from 'react'

function MainContent() {
    const [Input,setInput] = useState("")
     const [errors,setError] = useState("")
    const [showData,setShowData] = useState("")
    const Inputref = useRef(null)
    const handleChange = (e) =>{
        setInput(e.target.value)
       // console.log(e.target.value)
    }

    function Validation(Input) {
       let errors = ""
        if( Input === ""){
            errors = "Name is required"
        }
        return errors
    }
    useEffect(() =>{
        Inputref.current.focus()
    })
    const onClick =(event) =>{
        event.preventDefault();
       setShowData(Input)
       setError(Validation(Input))
    }
  return (
    <div className='main-content'>
     <form onSubmit={onClick}>
        <label htmlFor='item'>Enter your Name</label>
       
      <input  className='input' type='text' value={Input}  id='item' ref={Inputref}  onChange={handleChange} placeholder='Type something'/>
      {errors &&  <p style={{color:"red"}}> {errors} </p>}
       <br/>
       <br/>
      <button className='btn' > Submit</button>
      <h3>{showData}</h3>
     </form>
     
    </div>
  )
}

export default MainContent
 