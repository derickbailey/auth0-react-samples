# Auth0 React Samples

A step-by-step demonstration of how to add authentication to a React application with Auth0. 

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## What are these Examples?

Each folder contains a distinct application so that various Auth0 features can be viewed in isolation. 
You can read about these examples in our [React Quickstart](https://auth0.com/docs/quickstart/spa/react).

There are 5 example applications in this repository, following the major sections of the Quickstart documentation:

* **[01 - Login](/01-Login)**: The basics of logging in with Auth0, and creating a user session in your application
* **[02 - User Profile](/02-User-Profile)**: The core of retrieving and displaying information about the user, from Auth0, and displaying in your application
* **[03 - Calling an API](/03-Calling-an-API)**: The basics of making authenticated and authorized requests to your application's API endpoints
* **[04 - Authorization](/04-Authorization)**: Controlling authorization and authorized actions in a React.js application
* **[05 - Token Renewal](/05-Token-Renewal)**: Renewing the authorization token for a user, allowing them to continue using the application

> **Embedded Integration Samples**
>
> These samples use Auth0's [hosted login page](https://auth0.com/docs/hosted-pages/login) which offers 
> the fastest, most secure, and most feature-rich way to add authentication to your app.
> 
> For samples which demonstrate how to embed the Lock widget or a custom login form directly into your 
> application, see the [embedded-login](https://github.com/auth0-samples/auth0-react-samples/tree/embedded-login) branch.

## Getting Start with the Examples

Each of the 5 example applications is a complete working project on it's own, and each will need the same
core configuration. To get them up and running, you will need to do the following:

### 1 - Create a Free Auth0 Account

Go to [Auth0](https://auth0.com/signup) and click Sign Up. You can use Google, GitHub or Microsoft Account to login and keep things simple.

### 2 - Get the Code

To get the code for these exmaples, you can clone this repository directly, or download it from 
the [React Quickstart](https://auth0.com/docs/quickstart/spa/react) page in Auth0's documentation. 

```bash
# clone the repository
git clone https://github.com/auth0-samples/auth0-react-samples.git
cd auth0-react-samples
```

### 3 - Prepare to Run

There are two methods with which you can run the Auth0 React Quickstart application examples:

* **Docker** (recommended)
* Directly on your machine

To keep your machine clean of potential conflicts in library versions, and to ensure a consistent experience
in running these examples Auth0 recommends using Docker.

If you don't have Docker installed, Auth0 recommends the free [Docker Community Edition](https://www.docker.com/community-edition).

If you prefer to run the examples directly on your machine, you'll need to install the `create-react-app` module from npm, globally,
along with the dependencies for each application instance.

```bash
# install create-react-app from npm
npm install -g create-react-app

# install dependencies for an example app
cd 01-Login
npm install
```

> **NOTE:** You only need to install `create-react-app` once, but you must install the dependencies for each example application
> from within that example's folder.

Additionally, if you are not using create-react-app but are using Babel, you need to add the `stage-0` preset.

### 4 - Run the Example

From here, you can run any of the example apps by following the additional instructions found in the readme for each of the examples.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.
