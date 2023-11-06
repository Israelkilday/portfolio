
export const useAnimationTheme = () => {
    const container = document.querySelector(".container");

    const cloneContainer = container.cloneNode(true);

    cloneContainer.id = "dark_container";
    
    document.body.appendChild(cloneContainer);

}