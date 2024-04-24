import { BASE_URL } from './api';

const uploadImageToS3 = async (url: string, fileObject: File) => {
  await fetch(url, {
    method: 'PUT',
    body: fileObject,
  });
};

const createPresignedUrl = async (fileObject: File) => {
  const response = await fetch(`${BASE_URL}/images`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NmNhNmJmNC02YjZmLTRmNGYtOTczMS1iODM3Y2NkYmNiNmIiLCJpYXQiOjE3MTM5NDQ3NjR9.r-mQOFNRnn0lTkPtJsnGut7StIXisUDRVcaRZYEup2I',
    },
    body: JSON.stringify({ name: fileObject.name }),
  });
  const postResult = await response.json();

  await uploadImageToS3(postResult.item.url, fileObject);

  const instanceUrl = new URL(postResult.item.url);
  const urlWithoutQueryString = instanceUrl.origin + instanceUrl.pathname;
  return urlWithoutQueryString;
};

export default createPresignedUrl;
