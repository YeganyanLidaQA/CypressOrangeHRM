import { personalInfoPage } from "../pages/personalInfoPage";
import { testData } from "../locators/personalInfoLocators";

describe("Edit Personal Info Test", () => {
  before(() => {
    personalInfoPage.open();
  });

  it("Logs in and edits personal info", () => {
    personalInfoPage.login();
    cy.get("aside").should("be.visible");
    personalInfoPage.navigateToMyInfo();
    personalInfoPage.editPersonalDetails(
      testData.newFirstName,
      testData.newLastName
    );
    personalInfoPage.verifySuccessToast();
    personalInfoPage.verifyEditedData(
      testData.newFirstName,
      testData.newLastName
    );
  });
});
