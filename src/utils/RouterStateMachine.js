// import { identificationRoutes, authenticationRoutes } from "@/constants/router";
import router from "../router";

const states = Object.freeze({});
//TDOO: EXAMPLE STATES INSTANCE
// const states = Object.freeze({
//   [authenticationRoutes.SIGN_UP_NAME]: {
//     nextState: {
//       success: authenticationRoutes.OTP_NAME,
//       fail: "",
//       pending: "",
//     },
//   },
//   [authenticationRoutes.OTP_NAME]: {
//     nextState: {
//       success: authenticationRoutes.IDENTITY_INFO_NAME,
//       fail: "",
//       pending: "",
//     },
//     previousState: {
//       success: authenticationRoutes.SIGN_UP_NAME,
//       fail: "",
//       pending: "",
//     },
//   },
//   [authenticationRoutes.IDENTITY_INFO_NAME]: {
//     nextState: {
//       success: identificationRoutes.START_NAME,
//       fail: "",
//       pending: "",
//     },
//     previousState: {
//       success: authenticationRoutes.SIGN_UP_NAME,
//       fail: "",
//       pending: "",
//     },
//   },
// });

class RouterStateMachine {
  constructor(router, states) {
    this.states = states;
    this.router = router;
    this.sequence = [];
  }

  transition(behavior, status = "success") {
    const currentRoute = this.router.currentRoute.value;
    const currentRouteName = currentRoute.name;
    const nextStateName = this.states[currentRouteName][behavior][status];

    if (nextStateName) {
      this.router.push({ name: nextStateName });
      this.sequence.push({ from: currentRouteName, to: nextStateName });
    } else {
      console.error(`Invalid transition for behavior: ${behavior} with status: ${status}`);
    }
  }

  getCurrentState() {
    return this.router.currentRoute.value;
  }
  getSequence() {
    return this.sequence;
  }
}
const routerStateMachine = new RouterStateMachine(router, states);

export default routerStateMachine;
