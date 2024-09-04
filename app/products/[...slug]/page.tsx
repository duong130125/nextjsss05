import React from "react";

export default function IdProduct(props: any) {
  const { params } = props;
  return <div>Trang chi tiết sản phẩm có Id là: {params.slug}</div>;
}
