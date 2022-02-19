



window.onload = () => {
    var params = (new URL(document.location)).searchParams;
    var surveyIndex = params.get("survey");

    var surveys = JSON.parse(localStorage.getItem("generateSurvey"))
    if (surveys !=null){
    var survey = surveys[parseInt(surveyIndex)];
    if (survey !== undefined){
        renderQuestions(survey)
    } else {
        alert('survey not found')
    }}else {
        alert('no surveys available')
    }
}   




function renderQuestions(survey) {
    const questionsOutput = document.getElementById("questions");
    questionsOutput.innerHTML = "";
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

  function displaySurvey() {
    let surveyJSON = localStorage.getItem("generateSurvey");
    let survey;
    if (surveyJSON === null) {
      survey = questions;
    } else {
      survey = JSON.parse(surveyJSON);
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
