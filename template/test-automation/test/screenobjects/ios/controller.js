const loginConstants = require('../../../constants/loginConstants');

class Controller {
    async pause(milliseconds) {
        await driver.pause(milliseconds);
    }

    async clickElement(selector) {
        await $(selector).click();
    }

    async setInputValue(selector, value) {
        await $(selector).setValue(value);
    }

    async expectElementDisplayed(selector) {
        await expect($(selector)).toBeDisplayed();
    }

    async expectElementNotDisplayed(selector) {
        await expect($(selector)).not.toBeDisplayed();
    }

    async expectElementToHaveText(selector, expectedText) {
        await expect($(selector)).toHaveText(expectedText);
    }

    async waitForDisplay(selector) {
        await $(selector).waitForDisplayed();
    }

    async getTextValue(selector) {
        return await $(selector).getText();
    }

    async getAttrValue(selector, attributeVal) {
        return await $(selector).getAttribute(attributeVal);
    }
    
    async scrollToEnd() {
        await driver.execute('mobile: scroll',{direction:"down"});
    }

    async scrollToBeginning() {
        await driver.execute('mobile: scroll',{direction:"up"});
    }

    async scrollToMoreView() {
        let moreView = await $('~MoreToExplore');
        await driver.execute('mobile: scroll',{element: moreView.elementId, direction:"down"});
    }

    async scrollInToMansoryView() {
        let mansoryList = await $('~MasonryList');
        await driver.execute('mobile: scroll',{element: mansoryList.elementId, direction:"down"});
    }

    async scrollRight(){
        await driver.execute('mobile: scroll',{direction:"right"});
    }

    async scrollElementToRight(selector){
        await driver.execute('mobile: scroll', {element: selector.elementId, direction:"right"});
    }

    async scrollDownToSpecificYear(){
        let year = await $('//*[@value="2000"]');
        await driver.execute('mobile: scroll',{element: year.elementId, direction:"up"});
    }

    async scrollToWhoYouAreView(){
        let whoText = await $('//XCUIElementTypeStaticText[@name="WhoYouAreText"]');
        await driver.execute('mobile: scroll',{element: whoText.elementId, direction:"down"});
    }

    async scrollToWhatYouDoView(){
        let whatText = await $('//XCUIElementTypeStaticText[@name="WhatYouDoText"]');
        await driver.execute('mobile: scroll',{element: whatText.elementId, direction:"down"});
    }

    async scrollLeft(){
        await driver.execute('mobile: scroll',{direction:"left"});
    }

    async waitForDisplay(selector) {
        await $(selector).waitForDisplayed();
    }

    async goBack(){
        await driver.back();
    }

    async expectElementExist(selector) {
        return await $(selector).isExisting();
    }
    
    async expectKeyboardShown() {
        await driver.isKeyboardShown();
    }

    async expectElementEnabled(selector) {
        return await $(selector).isEnabled();
    }

    async scrollInToSectionView(selector) {
        selector = selector.substring(1);
        await driver.execute('mobile: scroll',{element: selector.elementId, direction:"down"});
    }

    async checkExistsScrolltoDisplay(selector){
        if(this.expectElementExist(selector)){
            this.scrollInToSectionView(selector)
            this.expectElementDisplayed(selector)
        }
    }

    async checkExiststoDisplay(selector){
        if(this.expectElementExist(selector)){
            this.expectElementDisplayed(selector)
        }
    }

    async login(){
        await this.waitForDisplay(this.selectors.signInButton);
        await this.setInputValue(this.selectors.emailInput, loginConstants.VALID_USERNAME);
        await this.setInputValue(this.selectors.passwordInput, loginConstants.VALID_PASSWORD);
        await this.clickElement(this.selectors.signInButton);
        await this.waitForDisplay(this.selectors.allowNotification);
        await this.clickElement(this.selectors.allowNotification);
    }

    async loginEmptyProfile(){
        await this.waitForDisplay(this.selectors.signInButton);
        await this.setInputValue(this.selectors.emailInput, loginConstants.EMPTY_PROFILE_USERNAME);
        await this.setInputValue(this.selectors.passwordInput, loginConstants.EMPTY_PROFILE_PASSWORD);
        await this.clickElement(this.selectors.signInButton);
        await this.waitForDisplay(this.selectors.allowNotification);
        await this.clickElement(this.selectors.allowNotification);
    }

    async qaProfile(){
        await this.waitForDisplay(this.selectors.signInButton);
        await this.setInputValue(this.selectors.emailInput, loginConstants.QA_PROFILE_USERNAME);
        await this.setInputValue(this.selectors.passwordInput, loginConstants.QA_PROFILE_PASSWORD);
        await this.clickElement(this.selectors.signInButton);
        await this.waitForDisplay(this.selectors.allowNotification);
        await this.clickElement(this.selectors.allowNotification);
    }

    async loginChatProfile(){
        await this.waitForDisplay(this.selectors.signInButton);
        await this.setInputValue(this.selectors.emailInput, loginConstants.CHAT_PROFILE_USERNAME);
        await this.setInputValue(this.selectors.passwordInput, loginConstants.CHAT_PROFILE_PASSWORD);
        await this.clickElement(this.selectors.signInButton);
        await this.waitForDisplay(this.selectors.allowNotification);
        await this.clickElement(this.selectors.allowNotification);
    }

    async JobProfile(){
        await this.waitForDisplay(this.selectors.signInButton);
        await this.setInputValue(this.selectors.emailInput, loginConstants.JOB_PROFILE_USERNAME);
        await this.setInputValue(this.selectors.passwordInput, loginConstants.JOB_PROFILE_PASSWORD);
        await this.clickElement(this.selectors.signInButton);
        await this.waitForDisplay(this.selectors.allowNotification);
        await this.clickElement(this.selectors.allowNotification);
    }

    async generateEmail() {
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let email = 'mobileuser_';
        for(var i=0; i<6; i++){
          email += chars[Math.floor(Math.random() * chars.length)];
        }
        email += '@yopmail.com';
        return email
    }

    async randomMessage(){
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let message = 'chat_';
        for(var i=0; i<6; i++){
            message += chars[Math.floor(Math.random() * chars.length)];
        }
        return message
    }
}

export default Controller;