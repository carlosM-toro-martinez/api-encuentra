import { useState } from "react";


function useSection() {
    const [section, setSection] = useState('museos');
    const [route, setRoute] = useState('Museos');

    return {
        section,
        route,
        setRoute,
        setSection,
    }
}

export default useSection