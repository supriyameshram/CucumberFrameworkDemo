package stepDefinitions;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.HomePage;
import pageObjects.LoginPage;
import pageObjects.RegisterPage;


public class Steps {
	WebDriver driver;
	HomePage home;
	LoginPage login; 
	RegisterPage register;

	@Given("^user is on Home Page$")
	public void user_is_on_Home_Page(){
		System.setProperty("webdriver.chrome.driver","D:\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		home = new HomePage(driver);
		home.navigateTo_HomePage();
	}

	@When("^he enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void he_enters(String username, String password)  {
		login = new LoginPage(driver);
		login.enter_credential(username, password);	
	}

	@When("^click on login button$")
	public void choose_on_login_button() {
		login = new LoginPage(driver);
		login.clickOn_Button();			
	}

	@Then("^he is able to login sucessfully\\.$")
	public void he_is_able_to_login_sucessfully() throws Throwable 
	{
		System.out.println("Login Successfully");
	}	
	
	@Then("^click on registration link$")
	public void click_on_registration_link() throws Throwable {
	    register = new RegisterPage(driver);
	    register.click_register_link();
	}
	
	@Then("^enter the details$")
	public void enter_the_details() throws Throwable {
	   register.fill_PersonalDetails();
	}
	
	@Then("^he is registered Successfully\\.$")
	public void he_is_registered_Successfully() throws Throwable {
	System.out.println("Registered Successfully");   
	driver.quit();
	}
}
