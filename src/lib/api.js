class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static keys() {
    // return {
    //   appKey: 'abc',
    //   appUrl: 'https://duospell.herokuapp.com/api/',
    //   s3Config: {
    //     keyPrefix: "uploads/",
    //     bucket: "duospell",
    //     region: "us-west-2",
    //     accessKey: "AKIAJJUZKVMA35QOKXUQ",
    //     secretKey: "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",
    //     successActionStatus: 201,
    //   },
    // }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'http://www.recipepuppy.com'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json.results );
  }
}
export default Api
