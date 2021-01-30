@ourAngularForm
Feature: Form Validation

    Scenario: Entire Form
        Given I go to "http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile"
        And I enter "Jimmy" for field "formData.name"
        And I enter "jim@gmail.com" for field "formData.email"
        When I click a button
        Then field "pre.ng-binding" contains "{\"name\":\"Jimmy\",\"email\":\"jim@gmail.com\"}"
