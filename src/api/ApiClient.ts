import axios, { AxiosError } from "axios";

function isAppProxyCorsError(error: AxiosError): boolean {
  return error.response === undefined && error.message.toLowerCase() === 'network error';
}

function handleAppProxyCorsError() {
    window.location.reload(); // reload the page to refresh the Azure App Proxy access token
}

const ApiClient = axios.create();

ApiClient.interceptors.response.use((res) => res, interceptErrorResponse);

function interceptErrorResponse(error: AxiosError) {
  if (isAppProxyCorsError(error)) {
    handleAppProxyCorsError();
  } else {
    alert('Something went wrong. Please refresh the page and try again.');
  }

  throw error;
}

export default ApiClient;
