import axios, { AxiosResponse } from "axios";
import { spotifyRefreshTokenResponse } from "../Constants/Types/Spotify";
import { CustomError } from "../Constants/Types/ErrorHandling";

export const yieldGet = (url: string, header?: object) => {
    if (header) {
        const headersArray = Object.entries(header);
        console.log(headersArray);
        return fetch(url, {
            method: 'GET',
            headers: headersArray
        })
    }
    else {
        return fetch(url, {
            method: "GET"
        })
    }
}



export const get = async (url: string, header?: object) => {
    try{
        const response = await axios.get(url, {headers: header});
          return response.data;
        }
    catch (error){
      throw error
    }
  }

export const post = async (url: string, payload: any, header?: object) => {
    try{
      const response = await axios.post(url, payload, {headers: header});
      return response.data;
    }
    catch(error: any){
      console.error(error)
      const customError: CustomError = {defaultErrorMessage: error.message, status: error.response.status, statusText:error.response.statusText, customErrorMessage: error.response?.data}
      throw customError
    }
  } 

  export const deletes = async (url: string, payload: any) => {
    try{
      const response = await axios.delete(url, payload);
      return response.data;
    }
    catch(error: any){
      console.error(error)
      const customError: CustomError = {defaultErrorMessage: error.message, status: error.response.status, statusText:error.response.statusText, customErrorMessage: error.response?.data}
      throw customError
    }
  } 

  export const put = async (url: string, payload: any) => {
    try{
      const response = await axios.put(url, payload);
      return response.data;
    }
    catch(error: any){
      console.log(error)
      const customError: CustomError = {defaultErrorMessage: error.message, status: error.response.status, statusText:error.response.statusText, customErrorMessage: error.response?.data}
      throw customError
    }
  } 

  export const spotifyPost = async (url: string, payload: any) => {
    try{
      const response: AxiosResponse<spotifyRefreshTokenResponse> = await axios.post(url, payload, {headers:{ "Content-Type": "application/x-www-form-urlencoded"}});
      return response.data;
    }
    catch(error){
      console.error(error)
    }
  } 

  //AxiosResponse by default is <any, any>, <data, headers>
  //Where this is referenced in my mutation, i need to set local storage to items from the data returned 
  //So have to change the data type that is returnd from 'any' to the specific data you expect to receive
  //Otherwise error occurs saying it can't access data.[variable], as it doesn't exist on type AxiosResponse<any, any>
  //With type change, it is now: AxiosResponse<RefreshTokenResponse, eny>



