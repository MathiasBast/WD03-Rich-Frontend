import request from 'superagent'

export const getData = () => {
  return {
    type: "GET_DATA"
  }
}

export const 

export function getData () {
  return (dispatch) => {
    return Request
      .get('/api/v1/data')
      .then(res => {
        dispatch(getData(res.body))
      })
      .catch(err => {
        console.log(err)
      })
  }
}