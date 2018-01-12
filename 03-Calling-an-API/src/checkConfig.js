import React from 'react';
import { AUTH_CONFIG } from './Auth/auth0-variables';

function checkAuth0Config(cb) {
  if (
    AUTH_CONFIG.domain === "{DOMAIN}" ||
    AUTH_CONFIG.clientId === "{CLIENT_ID}" ||
    AUTH_CONFIG.apiUrl === "{API_IDENTIFIER}"
  ) {
    return renderConfigError();
  } else {
    return cb();
  }
}

function renderConfigError(){
  return (
    <div>
      <h1>Missing Auth0 Configuration</h1>
      <p>
        You must configure the Auth0 variables at /src/Auth/auth0-variables.js
        <ul>
          <li>Domain</li>
          <li>Client ID</li>
          <li>API Identifier</li>
        </ul>
      </p>
    </div>
  );
}

export default checkAuth0Config;
