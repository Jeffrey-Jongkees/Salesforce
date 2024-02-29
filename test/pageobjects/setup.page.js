class Setup {
  elements = {
    appLauncher: () =>
      $('[class="slds-icon-waffle"]'),
    service: () => $('//p[text()="Service"]'),
  };

  async click_AppLauncher() {

    await this.elements.appLauncher().waitForExist();
    await this.elements.appLauncher().moveTo();
    await this.elements.appLauncher().waitForDisplayed();
    await this.elements.appLauncher().waitForClickable();
    await this.elements.appLauncher().moveTo();
    await this.elements.appLauncher().click();
  }

  async click_Service() {

    await this.elements.service().waitForExist();
    await this.elements.service().waitForDisplayed();
    await this.elements.service().waitForClickable();
    await this.elements.service().click();
}

}




export default new Setup();