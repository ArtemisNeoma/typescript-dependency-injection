import axios from 'axios';

const getCep = async (value: string): Promise<void> => {
  try {
    const { status } = await axios.get(
      `https://cep.awesomeapi.com.br/json/${value}`,
    );
    if (status === 200) return;
  } catch (error) {
    throw new Error('postal_code is invalid');
  }
};

export default getCep;
