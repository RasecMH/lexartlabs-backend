const payloadSerializer = (payload) => {
  const isArray = Array.isArray(payload);
  const result = [];

  if (isArray) {
    payload.forEach((item) => {
      item.data.forEach((dataItem) => {
        const newProduct = {
          id: item.id || null,
          name: item.name,
          brand: item.brand,
          model: item.model,
          price: dataItem.price,
          color: dataItem.color,
        };
        result.push(newProduct);
      })
      
    });
  } else {
    const newProduct = {
      id: payload.id || null,
        name: payload.name,
        brand: payload.brand || payload.details.brand,
        model: payload.model || payload.details.model,
        price: payload.price,
        color: payload.color || payload.details.color,
    };
    result.push(newProduct);
  }

  return result;
};

module.exports = payloadSerializer;