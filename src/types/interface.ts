export interface MyShopFormData {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number | string;
}

export interface MyProfileFormData {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

export interface MyNoticeFormData {
  hourlyPay: number | string;
  startsAt: Date;
  workhour: number | string;
  description: string;
}
