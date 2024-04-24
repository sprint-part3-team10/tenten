const postApplication = async (shopId: string, noticeId: string) => {
  const res = await fetch(
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}/notices/${noticeId}/applications`,
    {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MTUzYTM4Yi1kNmY4LTQ3MWUtYjcxMi1mYTRmNmFlOTY0NmQiLCJpYXQiOjE3MTM4MzU2MzR9.HCLEYHHbMQfE_sJfrz203-YmUGGcH31n3gNoIskAQ-g',
      },
    },
  );

  return res.json();
};

export default postApplication;
