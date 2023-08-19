import axios from 'axios'

class RestClient {
  static GetRequest = (getUrl)=>{
    return axios.get(getUrl).then(responce=>{
        return responce.data;
    }).catch(error=>{
        return null;
    })
  }
}

export default RestClient