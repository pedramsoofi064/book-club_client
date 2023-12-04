export default {
  ROOT_NAME: "Group",
  ROOT_COMPONENT: import('@/views/group/group.view.vue'),
  ROOT_PATH: "/group",
  

  MAIN_NAME: "GroupMain",
  MAIN_COMPONENT: import('@/views/group/main/main.view.vue'),
  MAIN_PATH: "",
  MAIN_META: {
    layout: "main-inner"
  },

  GROUP_NAME: "GroupSingle",
  GROUP_COMPONENT: import('@/views/group/id/id.view.vue'),
  GROUP_PATH: "/group/:id",
  GROUP_META: {
    layout: "main-inner"
  },


  REGISTER_ROOT_NAME: "GroupRegister",
  REGISTER_ROOT_COMPONENT: import('@/views/group/register/register.view.vue'),
  REGISTER_ROOT_PATH: "register",
  REGISTER_ROOT_META: {
    layout: "main"
  },

  REGISTER_INIT_ROOT_NAME: "GroupRegisterInit",
  REGISTER_INIT_ROOT_PATH: "",
  REGISTER_INIT_ROOT_COMPONENT: import('@/views/group/register/init/init.view.vue'),

  REGISTER_PLANS_ROOT_NAME: "GroupRegisterPlans",
  REGISTER_PLANS_ROOT_PATH: "plans",
  REGISTER_PLANS_ROOT_COMPONENT: import('@/views/group/register/plans/plans.view.vue'),

  REGISTER_PAYMENT_ROOT_NAME: "GroupRegisterPayment",
  REGISTER_PAYMENT_ROOT_PATH: "payment",
  REGISTER_PAYMENT_ROOT_COMPONENT: import('@/views/group/register/payment/payment.view.vue'),


};
