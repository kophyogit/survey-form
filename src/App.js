import './App.css';

function App() {
  return (
    <div>
    <h1 id="title">Survey Form</h1>
   <p id="description">Please fill out all</p>

    <form id="survey-form">

     <div class="section-1">
      <label id="name-label" for="name">Name</label>
       <input type="text" id="name" name="name" placeholder="Enter your name" required />
     </div>

     <div class="section-1">
      <label id="email-label" for="email">Email</label>
       <input type="email" id="email" name="email" placeholder="Enter your email" required />
     </div>

     <div class="section-1">
      <label id="number-label" for="age">Age</label>
       <input type="number" id="number" name="age" placeholder="Enter your age(must be 18 or above 18)" required min="18" max="200" />
     </div>

       <h4>Are you a student or an employee?</h4>
       <select id="dropdown">
         <option>student or employee</option>
         <option>student</option>
         <option>employee</option>
       </select>

       <h2>Gender</h2>
       <input id="male" type="radio" value="male" name="gender" /><label for="male"><label for="male">Male</label>
       <input id="female" type="radio" value="female" name="gender" /><label id="female" />Female</label>

       <p>Please read and agree our policy to submit</p>
       <input id="update" type="checkbox" value="personal" name="account-type" /><label for="update">send notification when new update out</label>
       <br />
       <input id="agreement" type="checkbox" value="business" name="account-type" /><label for="agreement">agree user policy</label>
       <br />

       <textarea rows="5" cols="50" placeholder="write an additional information"></textarea>
       <br /><br />

       <input type="submit" id="submit"  />

     </form>
    </div>
  );
}

export default App;
