export const SELECT_ITEM = 'SELECT_ITEM'

export const selectItem = (listIndex, itemIndex) => ({
    type: SELECT_ITEM,
    listIndex,
    itemIndex
})
