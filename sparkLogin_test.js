Feature('Login');

Scenario('Test Login Happy Path',  ({ I }) => {
    I.amOnPage('https://stage-spark.edgeapps.net/');
    I.see('Welcome to');
    I.fillField('(//input[contains(@class, "emot-1x5jdmq")])[1]', 'alexd@auctionedge.com');
    I.fillField('(//input[contains(@class, "emot-1x5jdmq")])[2]', '!Spark2020!');
    I.click('Sign In');
    I.wait(2)
    I.see("DASHBOARD");
    I.click('//*[@id="root"]/section/div[5]/header/div/div[4]/div[2]/button')
    I.click("//li[.='Logout']")
});
