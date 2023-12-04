import { groupRouterConstant } from "@/constants/router";

export default [
  {
    name: groupRouterConstant.ROOT_NAME,
    path: groupRouterConstant.ROOT_PATH,
    component: () => groupRouterConstant.ROOT_COMPONENT,

    children: [
      {
        name: groupRouterConstant.MAIN_NAME,
        path: groupRouterConstant.MAIN_PATH,
        component: () => groupRouterConstant.MAIN_COMPONENT,
        meta: groupRouterConstant.MAIN_META,
      },
      {
        name: groupRouterConstant.GROUP_NAME,
        path: groupRouterConstant.GROUP_PATH,
        component: () => groupRouterConstant.GROUP_COMPONENT,
        meta: groupRouterConstant.GROUP_META,
      },
      {
        name: groupRouterConstant.REGISTER_ROOT_NAME,
        path: groupRouterConstant.REGISTER_ROOT_PATH,
        component: () => groupRouterConstant.REGISTER_ROOT_COMPONENT,
        meta: groupRouterConstant.REGISTER_ROOT_META,
        children: [
          {
            name: groupRouterConstant.REGISTER_INIT_ROOT_NAME,
            path: groupRouterConstant.REGISTER_INIT_ROOT_PATH,
            component: () => groupRouterConstant.REGISTER_INIT_ROOT_COMPONENT,
          },
          {
            name: groupRouterConstant.REGISTER_PLANS_ROOT_NAME,
            path: groupRouterConstant.REGISTER_PLANS_ROOT_PATH,
            component: () => groupRouterConstant.REGISTER_PLANS_ROOT_COMPONENT,
          },
          {
            name: groupRouterConstant.REGISTER_PAYMENT_ROOT_NAME,
            path: groupRouterConstant.REGISTER_PAYMENT_ROOT_PATH,
            component: () =>
              groupRouterConstant.REGISTER_PAYMENT_ROOT_COMPONENT,
          },
        ],
      },
    ],
  },
];
