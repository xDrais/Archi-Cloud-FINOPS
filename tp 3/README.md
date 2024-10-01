## 1) Create an Azure App Service plan

![alt text](1.png)

![alt text](2.png)

## 2) Deploy a web application using Azure App Service

![alt text](3.png)

![alt text](4.png)

![alt text](5.png)

![alt text](6.png)

![alt text](7.png)

a) We can use multiple demployment sources such as the Azure portal, GitHub, or via FTP/SFTP.

## 3) Configure custom domains and SSL certificates

#### a) custom domains

![alt text](8.png)

![alt text](9.png)

#### Domain provider is either the azure one or an external domain service
#### Since we don't have an app service domain we need to create a new one 

![alt text](10.png)

	mywebsite123.net this will be the domain name since mywebsite.com is not available 

![alt text](11.png)

no Bailing support to buy a domain with H3 account 

without a custom domain we can't add an SSL cerification


## 4) Implement deployment slots for staging and production

![alt text](12.png)
