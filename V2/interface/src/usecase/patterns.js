const getPatterns = async (request) => {
  try {
    const patterns = await request('lights/patterns', 'GET');
    return {data: patterns};
  } catch (error) {
    console.error(error);
    return {data: null, error : error};
  }
};

const changePatterns = async (request, body)  => {
  try {
    const pattern = await request('lights/patterns', 'PATCH', body)
    return {data : pattern };
  } catch (error)  {
    console.error(error);
    return {data : null, error : error};
  }
} 

export {getPatterns, changePatterns};