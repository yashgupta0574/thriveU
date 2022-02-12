import React, { useEffect } from "react";

export const ScreenTime = () => {
  let mp = 0;
  let pc = 0;
  let tv = 0;
  let oth = 0;
  let total;
  let handleClickmp = () => {
    mp = document.getElementById("ph-time").value;
    // console.log(mp);
  };
  let handleClickpc = () => {
    pc = document.getElementById("pc-time").value;
    // console.log(pc);
  };
  let handleClicktv = () => {
    tv = document.getElementById("tv-time").value;
    // console.log(tv);
  };
  let handleClickoth = () => {
    oth = document.getElementById("oth-time").value;
    // console.log(oth);
  };
  let getTotal = (e) => {
    e.preventDefault();
    // parseInt(total, parseInt(mp) + parseInt(pc) + parseInt(tv) + parseInt(oth));
    document.getElementById("display-total1").innerHTML = 
      parseInt(mp) + parseInt(pc) + parseInt(tv) + parseInt(oth);
    // console.log(parseInt(mp) + parseInt(pc) + parseInt(tv) + parseInt(oth))

    total = parseInt(mp) + parseInt(pc) + parseInt(tv) + parseInt(oth);
    if(total<5){
      document.getElementById('suggestion-blogs-title').innerHTML = "<h3>Huraayy !!!! You Are A Champion</h3> "
      document.getElementById('suggestion-blogs').innerHTML = "<h5>Your Screen time is below the limit, You use your devices wisely.<br> Make sure to maintain your screen time. Good Luck!!! </h5>"

    }
    else if(total>=5 && total<8){
      document.getElementById('suggestion-blogs-title').innerHTML = "<h3>You Are Habitual</h3>"
      document.getElementById('suggestion-blogs').innerHTML = "<h5>Your screens are your daily companions, and has so become your Habit. <br>This much screen time can damange your Eyesight if you don't take breaks in between.<br> Try to take breaks for 10minutes after every hour. </h5>"

    }
    else if(total>=8 && total<12){
      document.getElementById('suggestion-blogs-title').innerHTML = "<h3>You Are Obsessed!!!</h3>"
      document.getElementById('suggestion-blogs').innerHTML = "<h5>Your screens seems to be on your mind at most times.<br> Your Screen time is very high. It will surely damange your Eyes. Try to reduce it by 3 to 4 hours</h5>"

    }
    else{
      document.getElementById('suggestion-blogs-title').innerHTML = "<h3>You Are Addicted !!!</h3>"
      document.getElementById('suggestion-blogs').innerHTML = "<h5>You seem to mentally and physically devoted to you screens in a way that <br>if your screens are not within your sight, you grow anxious.<br> Avoid this much screen it will be very bad for your mental health.</h5>"

    }
  };
  return (
    <div className="st-body">
      <div className="center-form center">
        <form className="form-entry" action="">
          <label htmlFor="phone">Mobile Phone : &nbsp;</label>
          <select name="phone" id="ph-time" onClick={handleClickmp}>
            <option value="0">0 hour</option>
            <option value="1">1 hour</option>
            <option value="2">2 hour</option>
            <option value="3">3 hour</option>
            <option value="4">4 hour</option>
            <option value="5">5 hour</option>
            <option value="6">6 hour</option>
            <option value="7">7 hour</option>
            <option value="8">8 hour</option>
            <option value="9">9 hour</option>
            <option value="10">10 hour</option>
            <option value="11">11 hour</option>
            <option value="12">12 hour</option>
          </select>
          <br />
          <br />
          <label htmlFor="phone">
            Laptop/PC : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <select name="phone" id="pc-time" onClick={handleClickpc}>
            <option value="0">0 hour</option>
            <option value="1">1 hour</option>
            <option value="2">2 hour</option>
            <option value="3">3 hour</option>
            <option value="4">4 hour</option>
            <option value="5">5 hour</option>
            <option value="6">6 hour</option>
            <option value="7">7 hour</option>
            <option value="8">8 hour</option>
            <option value="9">9 hour</option>
            <option value="10">10 hour</option>
            <option value="11">11 hour</option>
            <option value="12">12 hour</option>
          </select>
          <br />
          <br />
          <label htmlFor="phone">
            Telivison :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
          </label>
          <select name="phone" id="tv-time" onClick={handleClicktv}>
            <option value="0">0 hour</option>
            <option value="1">1 hour</option>
            <option value="2">2 hour</option>
            <option value="3">3 hour</option>
            <option value="4">4 hour</option>
            <option value="5">5 hour</option>
            <option value="6">6 hour</option>
            <option value="7">7 hour</option>
            <option value="8">8 hour</option>
            <option value="9">9 hour</option>
            <option value="10">10 hour</option>
            <option value="11">11 hour</option>
            <option value="12">12 hour</option>
          </select>
          <br />
          <br />
          <label htmlFor="phone">
            Others :
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <select name="phone" id="oth-time" onClick={handleClickoth}>
            <option value="0">0 hour</option>
            <option value="1">1 hour</option>
            <option value="2">2 hour</option>
            <option value="3">3 hour</option>
            <option value="4">4 hour</option>
          </select>
          <br />
          <br />
          <br />
          <button className="submit-btn" onClick={getTotal} >
            Submit
          </button>
          
        </form>
        <br />
        {/* <div id="display-total"></div> */}
        
      </div>
      <div className="card-1 suggestions1" >
       <h3>Your Total Screen Time is </h3> (in hours)
          <div className="card-body" id="display-total1"></div>
      <div id="suggestion-blogs-title"></div>
      <div id="suggestion-blogs"></div>
      </div>
    </div>
  );
};
