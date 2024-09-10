const getUrlQueryParamsValues = <T>(url: string): T => {
  const regex: RegExp = /[?&]([^=#]+)=([^&#]*)/g;
  let params: {[key: string]: string} = {};
  let match: RegExpExecArray | null;

  while ((match = regex.exec(url))) {
    params[match[1]] = match[2];
    console.log(match[1], match[2]);
  }
  return params as T;
};

export default {
  getUrlQueryParamsValues,
};
