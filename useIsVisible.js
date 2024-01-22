import { useLayoutEffect } from "react";

//element has to be positioned absolute or relative
const useNudgeVisibleX = ({ root, element }) => {
    useLayoutEffect(() => {
        if (element && root) {
            const { x: rootX, right: rootRight } = root.getBoundingClientRect();
            const { x, right } = element.getBoundingClientRect();
            if (x < rootX) {
                element.style.left = '1px'
            } else if (right > rootRight) {
                element.style.right = '1px'
            }
        }
    }, [root, element])
}

const useNudgeVisibleY = ({ root, element }) => {
    useLayoutEffect(() => {
        if (element && root) {
            const { y: rootY, bottom: rootBottom } = root.getBoundingClientRect();
            const { y, bottom } = element.getBoundingClientRect();
            if (y < rootY) {
                element.style.top = '1px'
            } else if (bottom > rootBottom) {
                element.style.bottom = '1px'
            }
        }
    }, [root, element])
}

const useNudgeVisible = ({ root, element }) => {
    useLayoutEffect(() => {
        if (element && root) {
            const { y: rootY, bottom: rootBottom, x: rootX, right: rootRight } = root.getBoundingClientRect();
            const { y, bottom, x, right } = element.getBoundingClientRect();
            if (x < rootX) {
                element.style.left = '1px'
            } else if (right > rootRight) {
                element.style.right = '1px'
            }
            if (y < rootY) {
                element.style.top = '1px'
            } else if (bottom > rootBottom) {
                element.style.bottom = '1px'
            }
        }
    }, [root, element])
}

export {useNudgeVisibleX, useNudgeVisibleY, useNudgeVisible};