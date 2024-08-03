import React,{useState} from 'react'
import contest from '../../assets/image/contest.jpg'
import axios from 'axios'

const Submission = () => {
  const host = 'http://localhost:5000/api/v1'

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [file, setFile] = useState('')

  const onUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setFile(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const onChange=(e)=>{
    const {name,value} = e.target
    if(name === 'title'){
      setTitle(value)
    }
    else if(name === 'description'){
      setDescription(value)
    }
    else if(name === 'tags'){
      setTags(value)
    }
  }

  const handleClick = async() => {
    console.log(title,description,tags)
    if(title === '' || description === '' || tags === '' || file === ''){
      alert('All fields are required')
      return
    }
    try{
    const response = await axios.post(`${host}/design/addDesign`,
      {title,
      description,
      tags,
      file},
      {headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      }
    )

    if(response.data.success){
      alert('Design added successfully')
    }
    else{
      alert('Failed to add design')
    }}
    catch(error){
      alert(error)
    }
  }

  return (
    <>
      <div>
        <img className="" src={contest} style={{ "height": "42vh", "width": "98vw","objectFit":"cover" }} />
      </div>

      <p className="fs-3 my-3 fw-bold">Xnova Contest Submission</p>
      <div className="w-50 m-auto p-3 text-start my-5" style={{"backgroundColor":"rgb(248 249 250)"}}>
        <div class="mb-5">
          <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold">Add Title</label>
          <input onChange={onChange} value={title} name="title" class="form-control" id="exampleFormControlInput1" placeholder="Ex. Elegant Evening Gown in Royal Blue...." />
        </div>
        <div class="mb-5">
          <label for="exampleFormControlTextarea1" class="form-label fs-5 fw-bold">Add description</label>
          <input value={description} name='description' onChange={onChange} class="form-control" id="exampleFormControlTextarea1" rows="3" style={{"height":"17vh"}} placeholder="Ex. This elegant evening gown features a sophisticated royal blue hue, meticulously crafted by our AI to enhance the wearer's grace and poise."></input>
        </div>
        <div class="mb-5">
          <label for="exampleFormControlInput1" class="form-label fs-5 fw-bold">Add Tags</label>
          <input value={tags} name="tags" onChange={onChange} class="form-control" id="exampleFormControlInput1" placeholder="Ex. Evening Gown, Royal Blue, Elegant, AI Design" />
        
        </div>
        <div class="mb-5">
          <label for="formFileMultiple" class="form-label fs-5 fw-bold">Add your designs</label>
          <input class="form-control" onChange={onUpload} type="file" id="formFileMultiple" multiple />
        </div>
        <div className="text-center">
        <button className="" style={{ "backgroundColor": "#4BF370", "color": "black" }} onClick={handleClick} >Submit Design</button>
        </div>

      </div>
    </>
  )
}

export default Submission
