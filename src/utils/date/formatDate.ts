export const formatDate = (date: string | Date): string => {
 
    const format = new Date(date);

    if (isNaN(format.getTime())) return '--'; 
    
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    };

    return new Intl.DateTimeFormat('es-ES', options).format(format);
  };
  