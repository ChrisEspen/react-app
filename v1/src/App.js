import React, {useState} from 'react';
import axios from 'axios';


function App() {
  const [state, setState] = useState('');
  const onSubmit = async (e) => {
    
    e.preventDefault();
    console.log(this.state.text);
    let formData = new FormData();
    formData.append('text'.this.state)
    const url = 'http://localhost:80//react-backend';
    axios.post(url,formData)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }
  const handleChange = async (e) => {
    setState(e.target.value);
  }
  
  return (
    <div>
      <div className="row m-3">
        <div className="col-sm-6 mb-3">
          <input type='text' placeholder='Enter text here' className='form-control' value={state} onChange={handleChange} />
        </div>
        <div className="col mb-3">
          <input type='submit' onClick={onSubmit} className='btn btn-dark' value='Save'/>
   </div>
      </div>
    </div>
  );
}

export default App;
