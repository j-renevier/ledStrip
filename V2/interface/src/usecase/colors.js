const getColors = async (request) => {
  try {
    const colors = await request('colors', 'GET');
    return {data: colors};

  } catch (error) {
    console.error(error);
    return {data: null, error : error};
  }
};

const createColors = async (request, body)  => {
  try {
    const color = await request('colors', 'POST', body)  
    return {data : color };
  } catch (error)  {
    console.error(error);
    return {data : null, error : error};
  }
} 

const updateColors = async (request, body)  => {
  try {
    const color = await request('colors', 'PATCH', body)  
    return {data : color };
  } catch (error)  {
    console.error(error);
    return {data : null, error : error};
  }
}

const deleteColors = async (request, body) => {
  try {
    const colors = await request('colors', 'DELETE', body);
    return {data: colors};

  } catch (error) {
    console.error(error);
    return {data: null, error : error};
  }
};

export {getColors, createColors, updateColors, deleteColors};
