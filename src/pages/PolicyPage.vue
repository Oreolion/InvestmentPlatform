<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <section>
    <div class="topbox">
      <div class="btnbox">
        <router-link to="/dashboard/accountprofile" class="button"
          >Account Details</router-link
        >
        <router-link to="/dashboard/policypage" class="button"
          >Confidentiality Policies</router-link
        >
      </div>
      <h2>Account Details</h2>
    </div>
    <div class="btmbox">
      <h5>
        Fidelity Broker Corps does its utmost to ensure the privacy,
        confidentiality and security of its clients are preserved both
        throughout their interaction with the company and afterwards, to the
        fullest extent achievable by the company.
      </h5>
      <p>
        1. When clients register with Fidelity Broker Corps they acknowledge
        their willingness to share with the company certain private information
        which we use for the purpose of confirming the client"s identity and
        ensuring the security of their deposits and trading account. This
        information is collected in line with our stringent verification
        procedures which are used to deter international money laundering
        operations and to ensure the security and safety of our customer"s
        trading activity throughout. <br />
        2. Our clients undertake to supply us with true, updated and accurate
        information about their identity. Furthermore they are required to state
        categorically that they are registering and trading on their own behalf
        and are not seeking at any time to act any manner which could be
        considered fraudulent nor are they seeking to impersonate any other
        individuals for any purposes whatsoever. <br />
        3. Fidelity Broker Corps data collection procedures include the
        collection of client"s freely disclosed information as shared with the
        company, in addition to the placement of cookies for the purposes of
        gathering data about the manner in which client"s interact with the
        Fidelity Broker Corps website. These tools for gathering client"s
        information are employed for the purpose of ensuring the customer"s own
        security and all data collected by the company is shared only with
        individuals within the company who are involved with the verification of
        customer account information for the express purpose of ensuring the
        customer"s confidentiality and security. <br />

        4.Fidelity Broker Corps will never disclose any private or otherwise
        confidential information in regards to our clients and former clients to
        third parties without the express, written consent of our clients,
        except in such specific cases in which disclosure is a requirement under
        law, or is otherwise necessary in order to perform verification analysis
        on the client"s identity for the purposes of safeguarding their account
        and securing their personal information. <br />
        5. By registering with Fidelity Broker Corps and through the voluntary
        interaction they undertake with Fidelity Broker Corps products and
        services the clients confirm and agree that they consent to the use of
        all or part of the information they provide concerning their Fidelity
        Broker Corps trading account, the transactions they undertake through it
        and the interactions which they perform with the company on behalf of
        the company. All interactions the customer undertakes with the company
        will be stored by the company for the purposes of record and as such may
        be employed by the company in such cases that disputes arise between
        clients and company. <br />
        6. Fidelity Broker Corps does its utmost to ensure the confidentiality
        of its clients personal information including the implementation of data
        protection procedures designed to ensure client confidentiality.
        Fidelity Broker Corps ensures that its data protection policy is
        regularly updated in order to ensure that client"s confidential
        information is continually safeguarded. <br />
        7. From time to time Fidelity Broker Corps may contact clients whether
        by phone or email for the purpose of offering them further information
        about Fidelity Broker Corps CFD trading or financial market trading. In
        addition the company may, on occasion, seek to contact clients, whether
        by phone or by email, for the purpose of informing them of unique
        promotional offerings provided by Fidelity Broker Corps for the client.
        Clients consent to the receipt of such contact when they consent to our
        terms and conditions of use when registering with Fidelity Broker Corps
        Any person wishing to opt out of further contact with Fidelity Broker
        Corps at anytime whatsoever is entitled to do so, simply by contacting
        the company whether by phone or email and requesting that no further
        contact on behalf of the company will be made.
      </p>
    </div>
    <p class="footer">C2024 fidelity broker corps.</p>
  </section>
</template>

<script setup>
import DashboardNav from "../components/DashboardNav.vue";
import HeaderAndNav from "../components/HeaderAndNav.vue";
</script>

<style scoped>
section {
  margin-left: 17rem;
}

.topbox {
  height: 40rem;
  width: 140rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #e67e22;
  position: relative;
}

.topbox::before {
  content: "";
  position: absolute;
  background-image: url("../assets/istockphoto-1425905549-170667a.webp");
  opacity: 0.4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 7rem;
  background-size: cover;
}
.topbox > * {
  /* Target all child elements */
  position: relative; /*  Allow child elements to overlap the pseudo-element */
}

.topbox h2 {
  margin-top: 3rem;
}
h2 {
  font-size: 5rem;
  font-weight: bold;
  margin-left: -25rem;
}

.topbox .btnbox {
  padding-top: 22rem;
  margin-bottom: 5rem;
  margin-left: -25rem;

  display: flex;
}

.button {
  width: 18rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  height: 6rem;
  background-color: transparent;
  border: 3px solid #ccc;
  color: #ccc;
}

a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.2);
  border-bottom: 6px solid #e67e22;
  padding: 0.3rem;
}

.btmbox {
  background-color: rgb(28, 28, 36);
  color: #ccc;
  margin-top: 7rem;
  margin-left: 0rem;
  width: 110%;
  padding: 6rem 5%;
}

h5 {
  font-size: 2.6rem;
  font-weight: bold;
  max-width: 85rem;
  margin: 0 auto;
  margin-bottom: 3rem;
}
.btmbox p {
  font-size: 2rem;
  margin: 0 auto;
  max-width: 85rem;
}

br {
  margin-bottom: 1rem;
}

.footer {
  color: green;
  font-size: 1.8rem;
  text-align: center;
}

.btmbox button {
  width: 25rem;
  font-size: 2rem;
}

@media (max-width: 768px) {
  section {
    margin-left: -5rem;
  }

  .topbox {
    width: 75rem;
  }
}

@media (max-width: 480px) {
  .topbox {
    width: 45rem;
  }

  .topbox .btnbox {
    margin-left: 0;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-left: 0;
  }

  .button {
    width: 18rem;
    cursor: pointer;
    display: flex;
    height: 5rem;
  }

  .btmbox {
    margin-top: 4rem;
    padding: 6rem 5%;
  }
}

@media (max-width: 320px) {
  .topbox {
    width: 40rem;
  }

  h5 {
    font-size: 2.2rem;

    margin-bottom: 2rem;
  }
  .btmbox p {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .topbox h2 {
    padding-top: 20rem;
  }

  .button {
    width: 16rem;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    height: 5rem;
  }
}
</style>
