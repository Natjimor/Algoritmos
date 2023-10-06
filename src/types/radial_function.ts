import "./components/export"
import { Pixel } from "../components/export"

export const radialFunction = (selected: string) => {
    const blendArray: Array<HTMLElement> = []
        for (let i = 0; i < 100; i++) {
            const pixel = document.createElement("grid-pixel")
            pixel.setAttribute("id", `${i}`)

            if (parseInt(selected) === i) {
                pixel.setAttribute("color", "FF0000")
            }

            if (parseInt(selected) === i-10 || 
                parseInt(selected) === i+10 || 
                parseInt(selected) === i-1 || 
                parseInt(selected) === i+1) {
                pixel.setAttribute("color", "FF4040")
            }

            if (parseInt(selected) === i-20 || 
                parseInt(selected) === i+20 || 
                parseInt(selected) === i-2 || 
                parseInt(selected) === i+2 || 
                parseInt(selected) === i+11 || 
                parseInt(selected) === i+9 || 
                parseInt(selected) === i-11 || 
                parseInt(selected) === i-9) {
                pixel.setAttribute("color", "FF7F7F")
            }

            if (parseInt(selected) === i-30 || 
                parseInt(selected) === i+30 || 
                parseInt(selected) === i-3 || 
                parseInt(selected) === i+3 || 
                parseInt(selected) === i+8 || 
                parseInt(selected) === i-8 || 
                parseInt(selected) === i+12 || 
                parseInt(selected) === i-12 || 
                parseInt(selected) === i+21 || 
                parseInt(selected) === i-21 || 
                parseInt(selected) === i+19 || 
                parseInt(selected) === i-19
            ) {
                pixel.setAttribute("color", "FFBFBF")
            }

            blendArray.push(pixel)
        }
        return blendArray
    }