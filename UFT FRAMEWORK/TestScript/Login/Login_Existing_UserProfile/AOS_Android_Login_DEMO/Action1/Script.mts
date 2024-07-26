'Device("Device").App("App").MobileObject("LAPTOPS Category").Tap
Reporter.Filter = rfDisableAll


LoadFunctionLibrary "C:\Automation\UFT_Framework_Master-main\Reusable Library\LoadDependencies.qfl"

LoadDependencies "Login_Existing_UserProfile.qfl", "[Login]_Android_Login_Existing_UserProfile.xlsx", "AOS_Android_Login_01"



LaunchAOSMobile()
LoginAOSMobile()
AddToCartCheckoutMobile()
LogoutAOSMobile()


