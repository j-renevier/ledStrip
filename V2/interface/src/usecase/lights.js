const getLights = async (request) => {
  try {
    const lights = await request('lights', 'GET');
    return {data: lights};
  } catch (error) {
    console.error(error);
    return {data: null, error : error};
  }
};

const getLightsState = async (request)  => {
  try {
    const lightsState = await request('lights/state', 'GET')

    return {data : lightsState.state, error : null};

  } catch (error)  {
    console.error(error);

    return {data : null , error : error};
  }
} 

const toggleLightsState = async (request)  => {
  try {
    const lightsState = await request('lights/state', 'PATCH', {})

    return {data : lightsState.state };

  } catch (error)  {
    console.error(error);
    return {data : null, error : error};
  }
} 




export {getLights, getLightsState, toggleLightsState}