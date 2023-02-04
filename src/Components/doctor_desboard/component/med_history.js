import './med_history.css';

function History() {
  return (
    <div className="main1">
      
      <div className='title'>
        Medisist
      </div>
      
      <div className='login'>
        Patient's Medical History
      </div>
      
      <div className='form1'>
      <label for="lname">Search by Patient's Name</label>
        <input type="text" id="p_name" placeholder='Enter Patient Name' name="p_name"></input>
      </div> 

      <div className='form1'>
      <label for="lname">Search by Patient's ID</label>
        <input type="number" id="p_id" placeholder='Enter Patient ID' name="p_id"></input>
      </div> 

      <div className='btn-his'>
        <button className='btn1-his'>Search</button>
      </div>
    </div>
  );
}

export default History;