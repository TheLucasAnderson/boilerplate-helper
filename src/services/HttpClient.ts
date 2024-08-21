import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { HttpResponse } from "./types";

/**
 * Class representing an HTTP client.
 */
class HttpClient {
  private axiosInstance: AxiosInstance;

  /**
   * Creates an instance of HttpClient.
   * @param {string} baseUrl - The base URL for the HTTP client.
   */
  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });

    this.initializeResponseInterceptor();
  }

  /**
   * Initializes the response interceptor.
   */
  private initializeResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  }

  /**
   * Handles the HTTP response.
   * @param {AxiosResponse} response - The HTTP response.
   * @returns {AxiosResponse} The processed HTTP response.
   */
  private handleResponse = <T>(response: AxiosResponse<T>) => {
    return response;
  }

  /**
   * Handles the HTTP error.
   * @param {AxiosError} error - The HTTP error.
   * @returns {Promise} A rejected promise with the error.
   */
  private handleError = <E>(error: AxiosError<E>) => {
    return Promise.reject(error);
  }

  /**
   * Sends an HTTP GET request.
   * @param {string} url - The URL for the GET request.
   * @returns {Promise<HttpResponse<T>>} A promise that resolves to the HTTP response.
   */
  public get = async <T>(url: string): Promise<HttpResponse<T>> => {
    const response = await this.axiosInstance.get<T>(url);
    return this.handleResponse(response);
  }

  /**
   * Sends an HTTP POST request.
   * @param {string} url - The URL for the POST request.
   * @param {T} body - The body for the POST request.
   * @returns {Promise<HttpResponse<T>>} A promise that resolves to the HTTP response.
   */
  public post = async <T>(url: string, body: T): Promise<HttpResponse<T>> => {
    const response = await this.axiosInstance.post<T>(url, body);
    return this.handleResponse(response);
  }

  /**
   * Sends an HTTP PUT request.
   * @param {string} url - The URL for the PUT request.
   * @param {T} body - The body for the PUT request.
   * @returns {Promise<HttpResponse<T>>} A promise that resolves to the HTTP response.
   */
  public put = async <T>(url: string, body: T): Promise<HttpResponse<T>> => {
    const response = await this.axiosInstance.put<T>(url, body);
    return this.handleResponse(response);
  }

  /**
   * Sends an HTTP DELETE request.
   * @param {string} url - The URL for the DELETE request.
   * @returns {Promise<HttpResponse<T>>} A promise that resolves to the HTTP response.
   */
  public delete = async <T>(url: string): Promise<HttpResponse<T>> => {
    const response = await this.axiosInstance.delete<T>(url);
    return this.handleResponse(response);
  }

  /**
   * Sends an HTTP PATCH request.
   * @param {string} url - The URL for the PATCH request.
   * @param {T} body - The body for the PATCH request.
   * @returns {Promise<HttpResponse<T>>} A promise that resolves to the HTTP response.
   */
  public patch = async <T>(url: string, body: T): Promise<HttpResponse<T>> => {
    const response = await this.axiosInstance.patch<T>(url, body);
    return this.handleResponse(response);
  }
}

export default HttpClient;