$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("End2End_Tests.feature");
formatter.feature({
  "line": 2,
  "name": "Successful login and registration",
  "description": "Description: The purpose of this feature is to test End 2 End integration.",
  "id": "successful-login-and-registration",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Successful login and registration with valid credentials",
  "description": "",
  "id": "successful-login-and-registration;successful-login-and-registration-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he enters \"mgr123\" and \"mgr!23\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "he is able to login sucessfully.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on registration link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter the details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "he is registered Successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 347881826110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mgr123",
      "offset": 11
    },
    {
      "val": "mgr!23",
      "offset": 24
    }
  ],
  "location": "Steps.he_enters(String,String)"
});
formatter.result({
  "duration": 32595288592,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_on_login_button()"
});
formatter.result({
  "duration": 13326201507,
  "status": "passed"
});
formatter.match({
  "location": "Steps.he_is_able_to_login_sucessfully()"
});
formatter.result({
  "duration": 163880,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_registration_link()"
});
formatter.result({
  "duration": 11500427744,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_the_details()"
});
formatter.result({
  "duration": 15353000400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.he_is_registered_Successfully()"
});
formatter.result({
  "duration": 1306745775,
  "status": "passed"
});
});