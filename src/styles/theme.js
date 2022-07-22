import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",

}

const colors = {
    yellow:"#F4B400"
}

// const styles = {

// }

const components = {
    variants:{
        Primary:{
            backgroundColor:"#F4B400",
            color:"#FFFF"
        }
    }
}

export const theme = extendTheme({
    colors,
    components,
    config
})