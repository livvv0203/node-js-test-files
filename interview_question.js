let outbound = [
  {
    sku: 'FG123123',
    quantity: '10',
    SONum: '50123123123',
    description: '10 items outbound',
  },
  {
    sku: 'FG123123',
    quantity: '10',
    SONum: '50123123123',
    description: '10 items outbound',
  },
  {
    sku: 'FG123124',
    quantity: '10',
    SONum: 'S0123123123',
    description: '10 items outbound',
  },
  {
    sku: 'FG123123',
    quantity: '10',
    SONum: '50123123124',
    description: '10 items outbound',
  },
  {
    sku: 'FG123123',
    quantity: '10',
    SONum: 'S0123123123',
    description: '10 items outbound',
  },
];

let filteredOutbound = outbound.filter((item, index) => {
  return (
    index ===
    outbound.findIndex(
      (obj) =>
        obj.sku === item.sku &&
        obj.quantity === item.quantity &&
        obj.SONum === item.SONum &&
        obj.description === item.description
    )
  );
});

console.log(filteredOutbound);
