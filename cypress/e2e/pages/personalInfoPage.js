import {
  loginLocators,
  sidebarLocators,
  personalInfoLocators,
  credentials,
} from "../locators/personalInfoLocators";

class PersonalInfoPage {
  open() {
    cy.visit(credentials.url);
  }

  login() {
    cy.get(loginLocators.usernameInput).type(credentials.username);
    cy.get(loginLocators.passwordInput).type(credentials.password);
    cy.get(loginLocators.loginButton).click();
    cy.get("aside", { timeout: 10000 }).should("be.visible");
  }

  navigateToMyInfo() {
    cy.get(sidebarLocators.myInfoTab).contains("My Info").click();
  }

  editPersonalDetails(firstName, lastName) {
    cy.get(personalInfoLocators.firstName).clear().type(firstName);
    cy.get(personalInfoLocators.lastName).clear().type(lastName);
    cy.contains(personalInfoLocators.saveButton, "Save").click();
  }

  verifySuccessToast() {
    cy.get(personalInfoLocators.successToast)
      .should("be.visible")
      .and("contain", "Success");
  }

  verifyEditedData(expectedFirstName, expectedLastName) {
    cy.get(personalInfoLocators.firstName).should(
      "have.value",
      expectedFirstName
    );
    cy.get(personalInfoLocators.lastName).should(
      "have.value",
      expectedLastName
    );
  }
}

export const personalInfoPage = new PersonalInfoPage();
