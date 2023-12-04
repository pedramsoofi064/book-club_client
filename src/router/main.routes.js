import { mainRouterConstant } from "@/constants/router";

export default [
    {
        name: mainRouterConstant.HOME_NAME,
        path: mainRouterConstant.HOME_PATH,
        component: ()=> mainRouterConstant.HOME_COMPONENT,
        meta: mainRouterConstant.HOME_META
    },
    {
        name: mainRouterConstant.ABOUT_US_NAME,
        path: mainRouterConstant.ABOUT_US_PATH,
        component: ()=> mainRouterConstant.ABOUT_US_COMPONENT,
        meta: mainRouterConstant.ABOUT_US_META
    }
]