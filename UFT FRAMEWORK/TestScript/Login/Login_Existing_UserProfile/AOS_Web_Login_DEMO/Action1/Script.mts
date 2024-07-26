Reporter.Filter = rfDisableAll
'LoadFunctionLibrary "C:\Automation\UFT_Framework_Master-main\Reusable Library\LoadDependencies.qfl"
LoadFunctionLibrary "UFT FRAMEWORK/Reusable Library/LoadDependencies.qfl"

LoadDependencies "Login_Existing_UserProfile.qfl", "[Login]_Web_Login_Existing_UserProfile.xlsx", "AOS_Web_Login_01"



LaunchAOSWeb()
LoginAOSWeb()
AddToCartCheckoutWeb()

LogoutAOSWeb()



