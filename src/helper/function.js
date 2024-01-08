const shorten =title => title.split(" ").slice(0,2).join("")

const isInCart = (state,id) =>{
    const result = !!state.items.find((item) => item.id === id)
    return result
}
const quantityCount = (state,id)=>{
    const index = state.items.findIndex((item) => item.id === id)
    if(index===-1){
        return false
    }else {
        return state.items[index].quantity
    }
}
export {shorten,isInCart,quantityCount}