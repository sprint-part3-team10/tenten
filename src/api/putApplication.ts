const putApplication = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
  // token: string,
) => {
  const res = await fetch(
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
    {
      method: 'PUT',
      cache: 'no-store',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MTUzYTM4Yi1kNmY4LTQ3MWUtYjcxMi1mYTRmNmFlOTY0NmQiLCJpYXQiOjE3MTQwMzQwOTN9.xr-FV4zsXPtJAM3FfQtm27wt1cTw2AGDDujAkXBpfVg`,
      },
      body: JSON.stringify({
        status: 'canceled',
      }),
    },
  );

  return res.json();
};

export default putApplication;
