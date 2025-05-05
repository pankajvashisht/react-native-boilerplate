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
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,7)');
    }

    async scrollToBeginning() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,7)');
    }

    async scrollInToUpvoteView() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("UpvoteCount"))');
    }

    async scrollToMoreView() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("More to explore")');
    }

    async scrollToCommentsView() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("comment"))');
    }

    async scrollToAllCommentsView(){
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("All Comments")');
    }

    async scrollToWhoYouAreView(){
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("WhoYouAreText"))');
    }

    async scrollToWhatYouDoView(){
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("WhatYouDoText"))');
    }

    async scrollInToMansoryView() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("MasonryList"))');
    }

    async scrollInToSectionView(selector) {
        selector = selector.substring(1);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("'+selector+'"))');
    }
    
    async scrollRight(){
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    }

    async scrollLeft(){
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
    }

    async scrollDownToSpecificYear(){
        await $("android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView"+ 
            "(new UiSelector().textContains(\"2000\").instance(0)).scrollBackward(10)");
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

    async clickKeyboardDone(){
        await driver.execute('mobile: performEditorAction', {'action': 'Done'});
    }

    async getAndroidId(){
        let result = await driver.execute('mobile:deviceInfo');
        return result.androidId;
    }

    async movetoBackground(){
        await driver.background(5);
        await driver.pressKeyCode(3);
        await driver.pressKeyCode(312);
        await driver.pressKeyCode(3);
    }

    async openNotifications(){
        await driver.openNotifications();
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

    async expectElementEnabled(selector) {
        return await $(selector).isEnabled();
    }

    async getTodayDate(){
        var todayDate = Date.now().toTimeString().split(/\s/)[0]; 
        console.log(todayDate);
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