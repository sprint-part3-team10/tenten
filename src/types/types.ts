export type Filter = {
  address: string[];
  startsAtGte: Date | undefined;
  hourlyPayGte: number | string;
};

export type CardItems = {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    closed: boolean;
    shop: {
      item: {
        id: string;
        name: string;
        address1: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
    };
  };
};
