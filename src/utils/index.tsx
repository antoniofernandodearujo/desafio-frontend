export const mockCity = () => {
    const cities = ['Rio de Janeiro', 'São Paulo', 'João Pessoa', 'Salvador', 'Brasília'];
    return cities[Math.floor(Math.random() * cities.length)];
};

export const mockWeekDays = () => {
    const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return weekdays[Math.floor(Math.random() * weekdays.length)];
};

export const generateUsernameFromEmail = (email: string): string => {
    const atIndex = email.indexOf('@');
    return atIndex !== -1 ? email.substring(0, atIndex) : email;
};
