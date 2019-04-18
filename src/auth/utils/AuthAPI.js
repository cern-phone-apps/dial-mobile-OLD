import { API_ENDPOINT3 } from "react-native-dotenv";

export class AuthAPI{
  /**
   *
   * @param path
   * @returns {string}
   */
  static buildEndpoint = path => {
    const apiPath = '/auth/v1';
    return `${API_ENDPOINT3}${apiPath}${path}`;
  };
}