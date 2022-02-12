import React from "react";

export const Diet = () => {
  let h = 0;
  let w = 0;
  let bmi = 0;
  let gen = "";
  let totalCal = 0;
  
  const calcCal= (e)=>
  {
    e.preventDefault();
    h = document.getElementById("inputHeight").value;
    w = document.getElementById("inputWeight").value;
    bmi = (parseInt(w) * 10000) / (parseInt(h) * parseInt(h));
    document.getElementById("bmi").innerHTML = `${bmi}`;
    if (document.getElementById("inlineRadio1").checked) {
      gen = "Male";
    } else {
      gen = "Female";
    }
    console.log(gen);
    if(document.getElementById("1").checked){
      totalCal+=242;
    }
    if(document.getElementById("2").checked){
    totalCal+=90.45;
    }
    if(document.getElementById("3").checked){
    totalCal+=104;
    }
    if(document.getElementById("4").checked){
    totalCal+=17;
    }
    if(document.getElementById("5").checked){
    totalCal+=10;
    }
    if(document.getElementById("6").checked){
    totalCal+=31;
    }
    if(document.getElementById("7").checked){
    totalCal+=266;
    }
    if(document.getElementById("8").checked){
    totalCal+=137;
    }
    if(document.getElementById("9").checked){
    totalCal+=131;
    }
    if(document.getElementById("10").checked){
    totalCal+=496;
    }
    if(document.getElementById("11").checked){
    totalCal+=98;
    }
    if(document.getElementById("12").checked){
    totalCal+=547;
    }
    if(document.getElementById("13").checked){
    totalCal+=37;
    }
    if(document.getElementById("14").checked){
    totalCal+=165;
    }
    if(document.getElementById("15").checked){
    totalCal+=131;
    }
    if(document.getElementById("16").checked){
    totalCal+=206;
    }
    if(document.getElementById("17").checked){
    totalCal+=294;
    }
    if(document.getElementById("18").checked){
    totalCal+=266;
    }
    if(document.getElementById("19").checked){
    totalCal+=295;
    }
    if(document.getElementById("20").checked){
    totalCal+=500;
    }
    if(document.getElementById("21").checked){
    totalCal+=52;
    }
    if(document.getElementById("22").checked){
    totalCal+=47;
    }
    if(document.getElementById("23").checked){
    totalCal+=84;
    }
    if(document.getElementById("24").checked){
    totalCal+=83;
    }
    if(document.getElementById("25").checked){
    totalCal+=296;
    }
    if(document.getElementById("26").checked){
    totalCal+=87;
    }
    if(document.getElementById("27").checked){
     totalCal+=25;
    }
    console.log(totalCal);
    document.getElementById('final-calorie').innerHTML = `Total Calorie Intake: ${totalCal}`;
    if(gen==="Male" && totalCal>=2500){
 document.getElementById('final-suggestions').innerHTML = "<h1>OHHH NOOO !!!</h1><p>1. Cook your own food <br/> 2. Don’t keep junk food in the house<br/>3. Use smaller plates<br/>4. Bulk up meals with vegetables<br/>5. Have a low-calorie starter <br/>6. Eat your meals slowly<br/>7. Eat without distractions<br/>8. Don’t touch the bread basket<br/>9. Eat whole fruits<br/>10. Try intermittent fasting</p>";
    }
    else if(gen==="Female" && totalCal>=2000){
 document.getElementById('final-suggestions').innerHTML = "<h1>OHHH NOOO !!!</h1><p>1. Cook your own food <br/> 2. Don’t keep junk food in the house<br/>3. Use smaller plates<br/>4. Bulk up meals with vegetables<br/>5. Have a low-calorie starter <br/>6. Eat your meals slowly<br/>7. Eat without distractions<br/>8. Don’t touch the bread basket<br/>9. Eat whole fruits<br/>10. Try intermittent fasting</p>";
    
    }
    else{
    document.getElementById('final-suggestions').innerHTML = 'NICE!!!!! You are having good diet plan!';
    }
  }
  

// to cal the things


 

  return (
    <div>
      <h1 className="m-4 p-2 display-5 title text-decoration-wavy">
        Diet Plan
      </h1>

      <div className="m-2 p-2 container-fluid">
        <section className="">
          <label htmlFor="gender" className="form-label gender-label">
            Select your gender
          </label>
          <span>
            <div className="form-check form-check-inline gender-sel mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="male"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="female"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
          </span>
        </section>

        <p>
          <label htmlFor="gender" className="form-label gender-label">
            Select your Age group
            <select
              className="input-group form-select gender my-2"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option value="l18">Below 18</option>
              <option value="18-60">Between 18 to 60</option>
              <option value="g60">Above 60</option>
            </select>
          </label>
        </p>
      </div>

      <div className="m-1 row gender-label">
        <label htmlFor="inputHeight" className="col-lg-2 col-form-label">
          Height(in cm)
        </label>
        <div className="col-sm-10">
          <input type="number" className="form-control " id="inputHeight"  required/>
        </div>
      </div>
      <div className="m-1 row gender-label">
        <label htmlFor="inputWeight" className="col-sm-2 col-form-label">
          Weight(in kg)
        </label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputWeight" required />
        </div>
      </div>
      <div className="m-1 row gender-label">
        <label htmlFor="inputWeight" className="col-sm-2 col-form-label">
          Your BMI is:
        </label>
        <span className="col-xl-10" id="bmi">
          0
        </span>
      </div>

      {/* Image and food items  */}
      <div className="d-img mb-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <img
              src="https://media.istockphoto.com/photos/classic-thai-food-dishes-picture-id1312283557?b=1&k=20&m=1312283557&s=170667a&w=0&h=hXAmitFiH9z0mK3GZdMDbkkcSl8Em84LIIlkHnVhpPE="
              className="card-img-top"
              width="2rem"
              height="500rem"
              alt="Error image Loading!!"
              m="10,20,30,40"
            />
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      
      {/* first */}
      <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="1" />&nbsp;Rice</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">130</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>53.4gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.4gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="2"/>&nbsp;Dal</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">90450</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>10.18gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B2, B6, B9, D2</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>3.24gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="3"/>&nbsp;Chapati</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">104</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>15.17gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B, E</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.4gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  

  {/* second */}
  <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="4" />&nbsp;Salad</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">17</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>2.9gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>A,C,D</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.24gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="5"/>&nbsp;Tea</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>0.2gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="6"/>&nbsp;Coffee</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">31</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* third */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="7" />&nbsp;Bread</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">266</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>49gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B, E</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>3.2gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="8"/>&nbsp;Noodles</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">137</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>25gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>2.06gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="9"/>&nbsp;Pasta</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">131</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>25gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>2gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* forth */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="10" />&nbsp;Milk</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">496</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>38.42gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>A,C,D</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>26.71gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="11"/>&nbsp;Curd</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">98</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>3.4gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>4.3gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="12"/>&nbsp;Chips</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">547</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>53gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>C</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>37gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* five */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="13" />&nbsp;Cold Drink</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">37</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>9.56gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.02gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="14"/>&nbsp;Chicken</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">165</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6, E</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>3.6gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="15"/>&nbsp;Egg</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">131</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B2</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>9gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* six */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="16" />&nbsp;Fish</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">206</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6,C</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>12gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="17"/>&nbsp;Mutton</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">294</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>21gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="18"/>&nbsp;Pizza</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">266</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>33gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>10gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* seventh */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="19" />&nbsp;Burger</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">295</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>24gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>---</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>35gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="20"/>&nbsp;Sweets</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">500</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>40gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>A,C,D</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>30gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="21"/>&nbsp;Apple</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">52</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>14gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6,C,K</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.2gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* eigth */} <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="22" />&nbsp;Orange</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">47</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>12gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>A,C</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.1gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="23"/>&nbsp;Banana</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">84</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>23gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>C,B6</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.3gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="24"/>&nbsp;Pomogranate</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">83</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>14gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>C, K</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>1gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* nine */}
    <div className="row align-items start">
      <div class="card border-primary mb-3 col details">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="25" />&nbsp;Paneer</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">296</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>4.5gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B12, D</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="26"/>&nbsp;Potato</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">87</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>17gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B1, B3, B6, C</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card border-primary mb-3 col">
        <div class="card-header ">
          <h2 className><input class="form-check-input" type="checkbox" value="" id="27"/>&nbsp;Cabbage</h2>
        </div>
        <div class="card-body text-primary">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Calories</th>
                <th scope="col">25</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carbohydrate</td>
                <td>6gm</td>
              </tr>
              <tr>
                <td>Vitamin</td>
                <td>B6,C,K</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>0.1gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  <br />
     <a className="final" onClick={calcCal}>SUBMIT</a>
  
     <br />
     <div id="final-calorie"></div>
     <div id="final-suggestions"></div>
    </div>
  );
};
