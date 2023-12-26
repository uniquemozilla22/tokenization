class ApiService {
  baseURL = "http://localhost:3000/";

  handleError(error) {
    return [null, "Oops! There is an error", error];
  }

  handleSuccess(data, message = "Success") {
    return [data, message, null];
  }

  async getRequest(pathname) {
    try {
      const data = await (await fetch(this.baseURL + pathname)).json();
      return this.handleSuccess(data);
    } catch (error) {
      return this.handleError(error);
    }
  }

  async postRequest(pathname, body) {
    try {
      const data = await (
        await fetch(this.baseURL + pathname, {
          method: "POST",
          body,
        })
      ).json();
      return this.handleSuccess(data);
    } catch (error) {
      return this.handleError(error);
    }
  }
}

export const API =  new ApiService();
