<template>
  <footer class="footer">
    <div class="inner-footer">
      <div class="logo link">
        <h3>FIDELITY <span>BROKER</span> CORPS</h3>
      </div>

      <div class="box1">
        <h5>Support</h5>
        <ul>
          <li>
            <router-link class="link" to="/contact">Contact</router-link>
          </li>
          <li>
            <router-link class="link" to="/program"
              >Trading Programme</router-link
            >
          </li>

          <li>
            <router-link class="link" to="/howtobuy"
              >How To Buy Crypto</router-link
            >
          </li>
        </ul>
      </div>
      <div class="box1">
        <h5>About Us</h5>
        <ul>
          <li>
            <router-link class="link" to="/about">About</router-link>
          </li>

          <li>
            <router-link class="link" to="/insight">Insight</router-link>
          </li>
        </ul>
      </div>
      <div class="box1">
        <h5>Get in Touch</h5>
          <p>Office Address: 548 Market St, San Francisco, CA 9410.</p>

          <p>Email: fidelityinvestmentcorps@email.com</p>
      </div>
    </div>

    <p class="c">
      This website is operated by FBC Markets LLC. FBC Markets LLC is a company
      registered with FSA of St. Vincent and the Grenadines, with registration
      number 126 LLC 2019 and registered address at Richmond Hill Road,
      Kingstown, VC0100, St. Vincent and the Grenadines. FBC Markets is a
      trading name of FBC Markets LLC. Risk Warning: Derivative products are
      highly leveraged, carry a high level of risk and may not be appropriate
      for all investors. The legal documents should be considered before
      entering into transactions with us. The information on this website is not
      intended for residents of certain jurisdictions and are not intended for
      distribution to, or use by, any person or entity in any jurisdiction where
      such distribution or use may be contrary to any local laws or regulations
      of that jurisdiction. Those who access this website do so on their own
      initiative. The release does not constitute any invitation to trade. FBC
      Markets operates through the following entities: First Prudential Markets
      Pty Ltd, an ASIC regulated provider of Derivatives and Forex trading
      services (ABN 16 112 600 281, AFS License No. 286354) First Prudential
      Markets Ltd (registration number HE 372179), a company authorised and
      regulated by the Cyprus Securities and Exchange Commission (CySEC License
      number 371/18) with registered address at 35 Omonoias, UAD Court, 7th
      Floor, 3045 Limassol, Cyprus. FBC Markets (Pty) Ltd, a Financial Services
      Provider authorised and regulated by the Financial Sector Conduct
      Authority in South Africa (FSP Number 50926) First Prudential Markets
      Limited, a company authorized and regulated by the Financial Services
      Authority (FSA) in Seychelles with License Number SD130 FBC Markets Ltd,
      an Investment Dealer, authorized and regulated by the Financial Services
      Commission in Mauritius (License No. GB21026264) Some payments may be
      processed by our group entity, Bivalto Ltd, an entity registered under the
      laws of the Republic of Cyprus, with registration number HE 442382, having
      its registered address at Griva Digeni,109, Aigeo Court, 3101, Limassol
      Cyprus. We do not offer our services to residents of certain jurisdictions
      such as Afghanistan, Cuba, Iraq, Islamic Republic of Iran, Liberia, Libya,
      Myanmar, Palestine, Russian Federation, Somalia, Syrian Arab Republic,
      Sudan, Yemen, United States and to jurisdictions on the FATF and EU/UN
      sanctions lists. * / ^ Sat & Sun 08:00am to 16:00pm (GMT+2) ** / ^^ Terms
      and conditions apply.
    </p>
    <br />
    <p class="p">Term of Service | Security | FIDELITY BROKER CORPS 2024</p>
  </footer>
</template>

<script setup></script>

<style scoped>
.logo {
  color: #e67e22;
  font-size: 2rem;
}

.logo h3 {
  line-height: 1;
  letter-spacing: 0.7;
  color: #e67e22;
}

.logo p {
  font-size: 1.3rem;
  letter-spacing: 1px;
  padding-left: 4px;
}

.link {
  color: #ccc;
  font-weight: bold;
  &:hover {
    color: #e67e22;
    letter-spacing: 1px;
  }
}

h3 span {
  color: green;
  background-color: #e67e22;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0.2rem;
  font-weight: bold;
}

.logo p {
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0.5rem;
  padding-left: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  white-space: nowrap;
}

.logo p span {
  background: rgba(355, 355, 355, 0.3);
  font-weight: bold;
  border-radius: 0.4rem;
  padding: 0.2rem;
  font-size: 1.3rem;
}

footer {
  background: #222;
  min-height: 40rem;
}

.inner-footer {
  display: flex;
  padding: 5rem 3%;
  flex-direction: row;
  gap: 15rem;
  margin-bottom: 2rem;
  color: #fff;
}

.inner-footer .box1 p {
    font-size: 1.5rem;
    max-width: 22rem;
    margin-bottom: 2rem;
}

.footer h5 {
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.footer li {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  white-space: nowrap;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  cursor: pointer;
  &:hover {
    color: #e67e22;
  }
}

footer .p {
  text-align: center;
  margin-right: 8rem;
  margin-bottom: 3rem;
  font-size: 1.4rem;
  color: #e67e22;
}
footer .c {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  color: #e67e22;
}

@media (max-width: 768px) {
  .footer .logo {
    margin: 0 auto;
  }
  .inner-footer {
    flex-direction: column;
    gap: 6rem;
    justify-content: center;
    align-items: center;
  }

  .footer .p {
    text-align: center;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .inner-footer {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
}
</style>
