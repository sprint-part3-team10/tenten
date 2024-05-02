import { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import classNames from 'classnames';
import Button from '../common/Button';
import styles from './DaumAddressInput.module.scss';

declare global {
  interface Window {
    daum: any;
  }
}

interface InputAddress {
  address: string;
  sido: string;
  sigungu: string;
  buildingName: string;
}

interface ReactHookFormProps {
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
  onChange: (value: string) => void;
}

interface DaumAddressInputArrayProps {
  addressData: ReactHookFormProps[];
}

export default function DaumAddressInput({
  addressData,
}: DaumAddressInputArrayProps) {
  const address1Data = addressData[0];
  const address2Data = addressData[1];

  const onClickAddress = () => {
    new window.daum.Postcode({
      shorthand: false,
      oncomplete(data: InputAddress) {
        const sigungu =
          data.sido === '서울특별시'
            ? `서울시 ${data.sigungu}`
            : `${data.sido} ${data.sigungu}`;
        const loadName = data.address.split(' ').reverse();
        const detailAddress = `${loadName[1]} ${loadName[0]} ${data.buildingName}`;
        address1Data.onChange(sigungu);
        address2Data.onChange(detailAddress);
        (document.getElementById('address1') as HTMLInputElement).value =
          sigungu;
        (document.getElementById('address2') as HTMLInputElement).value =
          detailAddress;
      },
    }).open();
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <div className={styles.locationBox}>
          <label htmlFor='address1'>주소 *</label>
          <div className={styles.withButtonBox}>
            <input
              id='address1'
              className={classNames(styles.input, {
                [styles.errorBox]: !!address1Data.error,
              })}
              type='text'
              placeholder='도로명주소를 선택해 주세요'
              {...address1Data.register}
              readOnly
            />
            <Button
              buttonType='button'
              onClick={onClickAddress}
              text='검색'
              size='S'
              width='7rem'
            />
          </div>
          {address1Data.error && (
            <div className={styles.error}>{address1Data.error.message}</div>
          )}
        </div>
        <div className={styles.locationBox}>
          <label htmlFor='address2'>상세 주소 *</label>
          <input
            id='address2'
            className={classNames(styles.input, {
              [styles.errorBox]: !!address2Data.error,
            })}
            type='text'
            placeholder='상세 주소를 입력해 주세요'
            {...address2Data.register}
          />
          {address2Data.error && (
            <div className={styles.error}>{address2Data.error.message}</div>
          )}
        </div>
      </div>
    </div>
  );
}
