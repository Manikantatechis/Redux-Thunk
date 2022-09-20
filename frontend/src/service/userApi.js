import axios from 'axios';

const baseURL = 'http://localhost:8000/users';

class UserApi {
  constructor() {
    this.axios = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json',
      },
      responseType: 'json',
    });
  }

  signin = async (email, password) => {
    try {
      const result = await this.axios.post(`${baseURL}/signin/`, {
        email,
        password,
      });
      return result;
    } catch (error) {
      return error.response;
    }
  };

  signup = async (email, password, name) => {
    try {
      const result = await this.axios.post(`${baseURL}/signup/`, {
        email,
        password,
        name,
      });
      return result;
    } catch (error) {
      return error.response;
    }
  };
}

export default new UserApi();
