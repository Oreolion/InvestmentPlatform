import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Dashboard from "../layouts/Dashboard.vue";
import DepositPage from "../pages/DepositPage.vue";
import DepositTransactions from "../pages/DepositTransactions.vue";
import WithdrawPage from "../pages/WithdrawPage.vue";
import WithdrawTransactions from "../pages/WithdrawTransactions.vue";
import NotFound from "../pages/NotFound.vue";
import SignupPageVue from "../pages/Signup.vue";
import LoginVue from "../pages/Login.vue";
import AccountProfile from "../pages/AccountProfile.vue";
import About from "../pages/About.vue";
import ContactPage from "../pages/ContactPage.vue";
import InsightPage from "../pages/InsightPage.vue";
import HowToBuyPage from "../pages/HowToBuyPage.vue";
import TradingProgramPage from "../pages/TradingProgramPage.vue";
import PolicyPage from "../pages/PolicyPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingPage,
    },

    { path: "/about", name: "about-page", component: About },
    { path: "/contact", name: "contact-page", component: ContactPage },
    { path: "/insight", name: "insight-page", component: InsightPage },
    { path: "/howtobuy", name: "how-to-buy-page", component: HowToBuyPage },
    {
      path: "/program",
      name: "trading-program-page",
      component: TradingProgramPage,
    },
    { path: "/login", name: "login-page", component: LoginVue },
    { path: "/signup", name: "signup-page", component: SignupPageVue },
    {
      path: "/dashboard",
      name: "dash-board",
      component: Dashboard,
      meta: { requiresAuth: true },
      //   children: [
      //   ],
    },
    {
      path: "/dashboard/depositfunds",
      name: "deposit-page",
      component: DepositPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/dashboard/withdrawfunds",
      name: "withdraw-page",
      component: WithdrawPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/dashboard/deposittransactions",
      name: "deposit-transactions",
      component: DepositTransactions,
      meta: { requiresAuth: true },
    },
    {
      path: "/dashboard/withdrawtransactions",
      name: "withdraw-transactions",
      component: WithdrawTransactions,
      meta: { requiresAuth: true },
    },
    {
      path: "/dashboard/accountprofile",
      name: "account-profile",
      component: AccountProfile,
      meta: { requiresAuth: true },
    },
    {
      path: "/dashboard/policypage",
      name: "policy-page",
      component: PolicyPage,
      meta: { requiresAuth: true },
    },

    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});

// global navigation guard
router.beforeEach(async (to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("isLoggedIn");

  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else if (
    isLoggedIn &&
    (to.name === "login-page" ||
      to.name === "signup-page" ||
      to.name === "landing-page")
  ) {
    next({ path: "/dashboard" });
  } else {
    next();
  }
});

export default router;
