import { useState, useEffect } from "react";


export function useGetDateToday(date: Date) {
    const [today, setToday] = useState(date);

    const month = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    
    useEffect(() => {
        const checkDate = () => {
            const now = date;
            if(now.getDate() !== today.getDate()){
                setToday(now);
            }
        }
        
        const interval = setInterval(checkDate, 60000);
        
        return () => clearInterval(interval);
    }, []);

    const dateFormat = `${today.getDate()} de ${month[today.getMonth()]} de ${today.getFullYear()}`;

    return { dateFormat };
}
    