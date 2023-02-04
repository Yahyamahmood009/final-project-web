import './reminder.css';

function Reminder() {
  return (
    <div className="main1">
      
      <div className='title'>
        Medisist
      </div>
      
      <div className='login'>
        Appointment Form
      </div>
      
      <div className='form1'>
        <div className='form1a'>
        <label for="fname">Patient Name*</label>
        <input type="text" placeholder='Enter Patient Name' id="p_name" name="p_name"></input>
        </div>

        <div className='form1b'>
        <label for="lname">Patient ID*</label>
        <input type="number" id="p_id" name="p_id"></input>
        </div>
      </div>

      <div className='form1'>
      <label for="lname">Appointment Date*</label>
        <input type="datetime-local" id="app_date" name="app_date"></input>
      </div> 

      <div className='btn-rem'>
        <button className='btn1-rem'>Set</button>
      </div>
    </div>
  );
}

export default Reminder;