//Fetching body tag
var body = document.getElementById("body");

//Create a form tag
var form = document.createElement("form");
form.setAttribute("id", "idform");
//Attach it to body
body.appendChild(form);

//Create a OrderdList
var ol = document.createElement("ol");
ol.setAttribute("id", "idol");
//Attach it to form
form.appendChild(ol);

const questions = [];

function choiceGenerator() {
  const box = document.getElementById("question");
  const selectOptions = [];

  //Select form
  const selectForm = `<input type="text" name="" id="select-value">
        <button id="add-option-button">Add Option</button>
        <button id="confirm-choice-button">Confirm</button>
        `;

  //shows the select form
  document.getElementById("output").innerHTML = selectForm;
  document.getElementById("add-option-button").addEventListener("click", () => {
    const input = document.getElementById("select-value");
    if (input.value !== "") {
      selectOptions.push(input.value);
      input.value = "";
    }
  });

  document
    .getElementById("confirm-choice-button")
    .addEventListener("click", () => {
      questions.push({
        type: "select",
        options: selectOptions,
        label: box.value,
      });
      renderQuestions(survey);
      clearInput();
    });

  //Attach it to Select
  // select.appendChild(option);
}
// @param {[]} survey
function renderQuestions(survey) {
  const questionsOutput = document.getElementById("questions");
  questionsOutput.innerHTML = "";
  console.log(survey);
  survey.forEach((question) => {
    switch (question.type) {
      case "select": {
        const optionsString = question.options
          .map(
            (option) =>
              `<option value="${option}}">${option.toUpperCase()}</option>`
          )
          .join("");
        const div = document.createElement("li");
        div.innerHTML = `<label for="${question.label}">${question.label}</label><select name="${question.label}">${optionsString}</select>`;
        questionsOutput.appendChild(div);
        break;
      }
      case "blankspace": {
        const div = document.createElement("li");
        const template = `<label for="${question.label}">${question.label}</label><input name="${question.label}" type="text"/>`;
        div.innerHTML = template;
        questionsOutput.appendChild(div);
        break;
      }
    }
  });
}



function store() {
  var getSurvey = localStorage.getItem("generateSurvey");
  if(getSurvey === null)
  {
    localStorage.setItem("generateSurvey", JSON.stringify([questions]));
  }
  else{
    getSurvey.push(questions);
    localStorage.setItem("generateSurvey", JSON.stringify(getSurvey));
  }
}

function inputGenerator() {
  const box = document.getElementById("question");
  questions.push({
    type: "blankspace",
    label: box.value,
  });
  clearInput();
}

function clearInput() {
  document.getElementById("question").value = "";
}

function addOption() {
  const input = document.getElementById("select-value");
  selectOptions.push(input.value);
  input.value = "";
}

function showSelect() {}

// var key = document.getElementById("key").value;
//Storing array as string on

//retrieving data

function displaySurvey() {
  let surveyJSON = localStorage.getItem("generateSurvey");
  let survey;
  if (surveyJSON === null) {
    survey = questions;
  } else {
    let surveys = (JSON.parse(surveyJSON));
    survey = surveys[surveys.length-1];
    localStorage.clear();
  }

  //   var questionsRetrieved = JSON.parse(surveyJSON);
  //   var dQuestions = document.createElement("p");
  //   body.appendChild(dQuestions);
  //   var aQuestions = document.createTextNode(surveyJSON);
  //   dQuestions.appendChild(aQuestions);
  //   console.log(questions);

  renderQuestions(survey);

  console.log("check");
}
