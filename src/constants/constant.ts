interface StatusLabelType {
  [status: string]: string;
}

// eslint-disable-next-line import/prefer-default-export
export const STATUS_LABEL: StatusLabelType = {
  accepted: '승인 완료',
  rejected: '거절',
  pending: '대기중',
};
