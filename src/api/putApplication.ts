const putApplication = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
  token: string,
) => {
  const res = await fetch(
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
    {
      method: 'PUT',
      cache: 'no-store',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status: 'canceled',
      }),
    },
  );

  return res.json();
};

export default putApplication;
