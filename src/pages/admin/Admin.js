import {
  ExposureNSalesPeriod,
  ProductDelivery,
  ProductImg,
  ProductInfo,
  ProductInfoNotice,
  ProductOption,
} from './components';

export default function Admin() {
  return (
    <>
      <ExposureNSalesPeriod />
      <ProductInfo />
      <ProductOption />
      <ProductImg />
      <ProductInfoNotice />
      <ProductDelivery />
    </>
  );
}
