import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './style.css';

function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
  const [ fullname, setFullname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ adate, setAdate ] = useState(null);
  const [ adate2, setAdate2 ] = useState(null);
  const [ mytext, setMytext ] = useState('Appt approval actions shown here');
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

    //setMyFind(!!(contacts2.find((item)=> item.includes(adate2)))?"Y":"N");
    //!!(this.myvar)?this.myvar:"whatever you want"
    
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



    props.handleSubmit('Full Name:'+fullname+' EMail:'+email+' Date:'+adate+' Details:'+ person + ' Recur:' + recur1);

    setContacts2([...contacts2, 'Full Name:'+fullname+' EMail:'+email+' Date:'+adate+' Details:'+ person + ' Recur:' + recur1]);

    //setArr1(contacts.data);

    setReqField(false);  // turn off checking fields for the form reset

    setPerson('');
    setFullname('');
    setEmail('');
    setAdate('');
    setRecur(false);

    //setMytext(props.data.length);
    setMytext("Appointment(s) approved!");

    e.preventDefault();    
  }
 // this.handleSubmit.bind(this)
  return (
     <form onSubmit={handleSubmit} class="form2">
      <button type="submit" class="widebtn3">Approve</button>
      <button type="reset" onClick={this.resetMe} class="add">Deny</button>

      <label class="wLbl">
        <input type="checkbox" name="switch1"
        onChange={handleChange5}  
        checked={recur1} />
        <span>click to approve all</span>
      </label>
      <p><mark>{mytext}</mark></p>      
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const chk = <input type="checkbox"/>
  const listItems = arr.map((val, index) =>
    <li class="li2" key={index}>{chk} {val}</li>
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

const contacts = ["Appt1", "Appt2", "Appt3"];

function Approve() {
	return (
		<>
      <h2 class="h12">Approve Appointments</h2>
			<ContactManager data={contacts} /> 
		</>
	);
}

export default Approve;