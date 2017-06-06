import { SELECT_ITEM } from '../actions'

const _list = [
    {
        title: "推荐",
        shrinkable: false,
        items: [
            {icon: "icon_yinle", title: "发现音乐", router: "/", exact: true},
            {icon: "icon_yingyongtubiaoxinhao", title: "私人FM", router: "/PersonalFM"},
            {icon: "icon_shipin", title: "MV", router: "/MV"},
            {icon: "icon_pengyou", title: "朋友", router: "/1"}
        ]
    },
    {
        title: "我的音乐",
        shrinkable: false,
        items: [
            {icon: "icon_bendiyinle", title: "本地音乐", router: "/2"},
            {icon: "icon_xiazai", title: "下载管理", router: "/3"},
            {icon: "icon_yun", title: "我的音乐云盘", router: "/4"},
            {icon: "icon_geshou", title: "我的歌手", router: "/5"},
            {icon: "icon_yuleyinlediantai", title: "我的电台", router: "/6"}
        ]
    },
    {
        title: "创建的歌单",
        shrinkable: true,
        items: [
            {icon: "icon_hert", title: "我喜欢的音乐", router: "/7"},
            {icon: "icon_liebiao", title: "下载管理", router: "/8"},
            {icon: "icon_liebiao", title: "我的音乐云盘", router: "/9"},
            {icon: "icon_liebiao", title: "我的歌手", router: "/10"},
            {icon: "icon_liebiao", title: "我的电台", router: "11"}
        ]
    }
]

function list( state=_list, action){
    switch (action.type) {
    case SELECT_ITEM:
        const { listIndex, itemIndex} = action
        return state.map((list, _listIndex)=>{
            return {
                ...list,
                items: list.items.map((item, _itemIndex)=>{
                    if(listIndex===_listIndex && itemIndex===_itemIndex){
                        return {...item, active: true}
                    }
                    return {...item, active: false}
                })
            }
        })
    default:
        return state
    }
}

export default list
