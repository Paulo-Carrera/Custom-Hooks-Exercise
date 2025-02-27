// custom hook for flipping cards
import { useEffect, useState } from "react";

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);

    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    }

    return [isFacingUp, flipCard];
}

export default useFlip;