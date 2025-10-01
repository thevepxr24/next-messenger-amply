import { defineAuth,secret } from "@aws-amplify/backend";
import { preSignUp } from "./pre-signup/resource";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
     /* google: {
        clientId: secret("GOOGLE_CLIENT_ID"),
        clientSecret: secret("GOOGLE_CLIENT_SECRET"),
      },*/
      callbackUrls: ["http://localhost:5173/","https://6122ca79e5d06d7e3769.auth.us-east-1.amazoncognito.com", "http://localhost:3000/",],
      logoutUrls: ["http://localhost:5173/","https://6122ca79e5d06d7e3769.auth.us-east-1.amazoncognito.com", "http://localhost:3000/",],
    }, 
  },
  triggers: {
    preSignUp,
  },
  userAttributes: {
    preferredUsername: { required: true },
  },
  access: (allow) => [allow.resource(preSignUp).to(["listUsers"])],
});
