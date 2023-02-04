import './dig_pres_form.css';

function Digital_form() {
  return (
    <div className="main1">
      
      <div className='title'>
        Medisist
      </div>
      
      <div className='login'>
        Digital Prescription Form
      </div>
      
      <div className='form1'>
        <div className='form1a'>
        <label for="fname">Patient Name*</label>
        <input type="text" placeholder='Enter Patient Name' id="p_name" name="p_name"></input>
        </div>

        <div className='form1b'>
        <label for="lname">Prescription Date*</label>
        <input type="date" id="pre_date" name="pre_date"></input>
        </div>
      </div>

      <div className='form1'>
        <div className='form1a'>
        <label for="fname">Patient ID*</label>
        <input type="number" placeholder='Enter First Name' id="p_id" name="p_id"></input>
        </div>

        <div className='form1b'>
        <label for="lname">Diagnose*</label>
        <input type="text" id="dia" placeholder='Enter Diagnose Name' name="dia"></input>
        </div>
      </div>

      <div className='form1'>
        <div className='form1a'>
        <label for="fname">Medicine Name*</label>
        <input type="text" placeholder='Enter Medicine Name' id="med1" name="med1"></input>
        </div>

        <div className='form1b'>
        <label for="lname">Timing*</label><br/><br/>
        <input type="checkbox" id="ch1a" name="ch1a"></input>Morning
        <input type="checkbox" id="ch2a" name="ch2a"></input>Afternoon
        <input type="checkbox" id="ch3a" name="ch3a"></input>Night
        </div>
      </div>

      <div className='form1'>
        <div className='form1a'>
        <label for="fname">Medicine Name*</label>
        <input type="text" placeholder='Enter Medicine Name' id="med2" name="med2"></input>
        </div>

        <div className='form1b'>
        <label for="lname">Timing*</label><br/><br/>
        <input type="checkbox" id="ch1b" name="ch1b"></input>Morning
        <input type="checkbox" id="ch2b" name="ch2b"></input>Afternoon
        <input type="checkbox" id="ch3b" name="ch3b"></input>Night
        </div>
      </div>

      <div className='btn-pre'>
        <button className='btn1-pre'>Submit</button>
      </div>
    </div>
  );
}

export default Digital_form;