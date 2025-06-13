const getNetworks = async (request) => {
  const updatedAt = Date.now();

  try {
    const networks = await request('networks', 'GET');
    return {data: networks};

  } catch (error) {
    console.error(error);

    return {data: null, error : error};
  }
};

export {getNetworks};
