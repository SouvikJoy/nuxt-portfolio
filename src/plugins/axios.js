import * as https from 'https';

export default function ({ $axios, isDev, redirect }) {
  if (isDev) {
	  $axios.defaults.httpsAgent = new https.Agent({
	    rejectUnauthorized: false
    });

    console.log('RejectUnauthorized is disabled.');
  }

  /* $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
  }); */
}
