import "../components/export"
import { Pixel } from "../components/export"

export const radialFunction = (selected: string) => {
    const blendArray: Array<HTMLElement> = []
        for (let i = 0; i < 225; i++) {
            const pixel = document.createElement("grid-pixel")
            pixel.setAttribute("id", `${i}`)

            if (parseInt(selected) === i) {
                pixel.setAttribute("color", "28155D")
            }

            if (parseInt(selected) === i-15 ||
                parseInt(selected) === i+15 ||
                parseInt(selected) === i-14 ||
                parseInt(selected) === i+14 ||
                parseInt(selected) === i-16 ||
                parseInt(selected) === i+16 ||
                parseInt(selected) === i-1 ||
                parseInt(selected) === i+1
                )
                {pixel.setAttribute("color", "28155dc0")
            }

            if (parseInt(selected) === i-32 ||
                parseInt(selected) === i+32 ||
                parseInt(selected) === i-31 ||
                parseInt(selected) === i+31 ||
                parseInt(selected) === i-30 ||
                parseInt(selected) === i+30 ||
                parseInt(selected) === i-29 ||
                parseInt(selected) === i+29 ||
                parseInt(selected) === i-28 ||
                parseInt(selected) === i+28 ||
                parseInt(selected) === i-17 ||
                parseInt(selected) === i+17 ||
                parseInt(selected) === i+13 ||
                parseInt(selected) === i-13 ||
                parseInt(selected) === i-2  ||
                parseInt(selected) === i+2
                )
                {pixel.setAttribute("color", "28155d85")
            }

            if (parseInt(selected) === i-48 ||
                parseInt(selected) === i+48 ||
                parseInt(selected) === i-47 ||
                parseInt(selected) === i+47 ||
                parseInt(selected) === i-46 ||
                parseInt(selected) === i+46 ||
                parseInt(selected) === i-45 ||
                parseInt(selected) === i+45 ||
                parseInt(selected) === i-44 ||
                parseInt(selected) === i+44 ||
                parseInt(selected) === i-43 ||
                parseInt(selected) === i+43 ||
                parseInt(selected) === i-42 ||
                parseInt(selected) === i+42 ||
                parseInt(selected) === i-33 ||
                parseInt(selected) === i+33 ||
                parseInt(selected) === i-27 ||
                parseInt(selected) === i+27 ||
                parseInt(selected) === i-18 ||
                parseInt(selected) === i+18 ||
                parseInt(selected) === i-12 ||
                parseInt(selected) === i+12 ||
                parseInt(selected) === i-3 ||
                parseInt(selected) === i+3
                )
                {pixel.setAttribute("color", "28155d56")
            }
            if (parseInt(selected) === i-64 ||
                parseInt(selected) === i+64 ||
                parseInt(selected) === i-63 ||
                parseInt(selected) === i+63 ||
                parseInt(selected) === i-62 ||
                parseInt(selected) === i+62 ||
                parseInt(selected) === i-61 ||
                parseInt(selected) === i+61 ||
                parseInt(selected) === i-60 ||
                parseInt(selected) === i+60 ||
                parseInt(selected) === i-59 ||
                parseInt(selected) === i+59 ||
                parseInt(selected) === i-58 ||
                parseInt(selected) === i+58 ||
                parseInt(selected) === i-57 ||
                parseInt(selected) === i+57 ||
                parseInt(selected) === i-56 ||
                parseInt(selected) === i+56 ||
                parseInt(selected) === i-49 ||
                parseInt(selected) === i+49 ||
                parseInt(selected) === i-41 ||
                parseInt(selected) === i+41 ||
                parseInt(selected) === i-34 ||
                parseInt(selected) === i+34 ||
                parseInt(selected) === i-26 ||
                parseInt(selected) === i+26 ||
                parseInt(selected) === i-19 ||
                parseInt(selected) === i+19 ||
                parseInt(selected) === i-11 ||
                parseInt(selected) === i+11 ||
                parseInt(selected) === i-4 ||
                parseInt(selected) === i+4
                )
                {pixel.setAttribute("color", "28155d20")
            }

            blendArray.push(pixel)
        }
        return blendArray
    }