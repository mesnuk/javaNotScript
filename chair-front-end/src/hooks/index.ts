import {useEffect, useRef} from "react";

export const useClickOutside = (handleClose: Function) => {
    const ref = useRef(null)

    useEffect(() => {

        let handler = (e: Event) => {

            // @ts-ignore
            if(!ref?.current.contains(e.target)){
                handleClose();
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    return { ref }

}