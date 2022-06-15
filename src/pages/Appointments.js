import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown'
//import useStyle from "../reactFrames/useStyle"
// import './style.css';

class DrpDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
    }
    this._onSelect = this._onSelect.bind(this)
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

 _onSelect(option) {
    this.setState({ selected: option })
  }

// {this.state.guestname} {this.state.guestemail} {this.state.checkin}

  render() {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
    return (
      <div class="form-body">
          <label for="comment" class="wLbl">What type of appointment? (Consulting, office hours, tutoring, counseling)</label>
          <label for="comment" class="wLbl">
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                {placeHolderValue == options[0] && <MyOffice />}
                {placeHolderValue == options[1] && <MyConsulting />}
                {placeHolderValue == options[2] && <MyOther />}
            <span class="field-icon"><i class="request type"></i></span>
          </label>
      </div>
    );
  }
}

function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
  const [ fullname, setFullname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ adate, setAdate ] = useState(null);
  const [ adate2, setAdate2 ] = useState(null);
  const [ mytext, setMytext ] = useState('Appt scheduling actions shown here');
  const [ reqf, setReqField ] = useState(true);
  const [ recur1, setRecur ] = useState(false);
  const [ contacts2, setContacts2] = useState(contacts);
  //const [ myfind, setMyFind]  = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleChange2(e) {
    setEmail(e.target.value);
  }

  function handleChange3(e) {   
    setAdate(e.target.value);
    setAdate2(e.target.value);    
  }

  function handleChange4(e) {
    setFullname(e.target.value);
  }

  function handleChange5(e) {
    setRecur(e.target.checked);
    setMytext("Recur: " + e.target.checked);
  }

  resetMe = () => {
    setPerson('');
    setFullname('');
    setEmail('');
    setAdate('');
    setRecur(false);
    setMytext("Form Cleared");
  }

  function handleSubmit(e) {
    setReqField(true);    // check fields on submission
    //&& email !== ''

    //setMytext({contacts}.find((item)=> item.length > 1))

    if(!(!!(contacts2.find((item)=> item.includes(adate2)))) && fullname !== '' && adate !== null) {
      props.handleSubmit('Full Name:'+fullname+' EMail:'+email+' Date:'+adate+' Details:'+ person + ' Recur:' + recur1);

      setContacts2([...contacts2, 'Full Name:'+fullname+' EMail:'+email+' Date:'+adate+' Details:'+ person + ' Recur:' + recur1]);

      setReqField(false);  // turn off checking fields for the form reset

      setPerson('');
      setFullname('');
      setEmail('');
      setAdate('');
      setRecur(false);

      //setMytext(props.data.length);
      setMytext("Entry Submitted");
    }
    else {
      if(!!(contacts2.find((item)=> item.includes(adate2)))){
        setMytext("Date not available!");
      }
      else
      {
        setMytext("Missing Data!");
      }
    }
    e.preventDefault();    
  }
 // this.handleSubmit.bind(this)
  return (
     <form onSubmit={handleSubmit} class="form2">
      <div class="section">
        <label for="guestname" class="wLbl2">Please Enter Your Name:</label>
        <label for="guestname">
          <input type="text" name="guestname" 
          class="wLbl3" 
          placeholder="John Doe/Jane Doe"
          onChange={handleChange4} 
          value={fullname} 
          required={reqf} />
        </label>
      </div>
      <div class="form">
        <div class="section colm colm6">
          <label for="guestemail" class="wLbl2">Email Address</label>
          <label for="guestemail" >
            <input type="email" name="guestemail" 
            class="wLbl3" 
            placeholder="john@something.com"
            onChange={handleChange2}
            value={email} />
          </label>
        </div>
      </div>
      <div class="form">
        <div class="section colm colm6">
          <label for="checkin" class="wLbl2">Appointment Date</label>
          <label for="checkin" >
            <input type="date"  name="checkin" placeholder="mm/dd/yyyy" class="wLbl3"
            onChange={handleChange3} 
            value={adate} 
            required={reqf} />
          </label>
        </div>
      </div>

      <input type="text" class="appt"
        placeholder="Add new appointment details" 
        onChange={handleChange} 
        value={person} />

      <button type="submit" class="add">Add</button>
      <button type="reset" onClick={this.resetMe} class="add">Reset</button>

      <label class="wLbl">
        <input type="checkbox" name="switch1"
        onChange={handleChange5}  
        checked={recur1} />
        <span>click to request reoccurring appointment</span>
      </label>
      <br></br>
      <br></br>
      <DrpDown />
      <p><mark>{mytext}</mark></p>      
    </form>
  );
}

const options = ['Office hours', 'Consulting hours', 'Other Hours']

function MyOffice() {
  return (
    <>
      <h3>My Office Hours</h3>
      <h4>Monday's - 9am to 10am and 3pm to 4pm</h4>
      <h4>Wednesday's - 10am to 11am and 4pm to 5pm</h4>
    </>
  );
}

function MyConsulting() {
  return (
    <>
      <h3>My Consulting Hours</h3>
      <h4>Tuesday's from 8am to 12pm and 1pm to 3:30pm</h4>
    </>
  );
}

function MyOther() {
  return (
    <>
      <h3>My Other Hours</h3>
      <h4>I am available via phone and appointment during normal buisness hours Monday through friday </h4>
      <h4>Should you need me outside of normal business hours, email and I will do my best to get back to you as soon as possible</h4>
    </>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li class="li2" key={index}>{val}</li>
  );
  return <ul class="ul2">{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);  

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

// "Appt1", "Appt2", "Appt3"

const contacts = [];

function MyContacts() {
	return (
		<>
      <h2 class="h12">Create Appointments</h2>
			<ContactManager data={contacts} /> 
		</>
	);
}

export default MyContacts;