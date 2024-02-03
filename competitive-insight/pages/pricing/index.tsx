import BoldButtonLink from "../../components/bold-button-link";
import CardList from "../../components/card-list";
import Layout from "../../components/layout";
import PageHeader from "../../components/layout/page-header";
import Section from "../../components/layout/section";
import PricingChart from "../../components/pricing/pricing-chart";
import Statement from "../../components/typography";

const PricingPage: React.FC = ({}) => (
  <Layout title="Pricing">
    <PageHeader
      title="Pricing Plans"
      subTitle="We have marketing & digital PR solutions for every business stage"
    />

    <Section bgColor="medium" className="wide no-padding">
      <Section.Rows>
        <PricingChart />
      </Section.Rows>
    </Section>

    <Section className="wide">
      <br className="xs-down" />
      <Section.Header title="Competitive Insight - Market Research AddOns" center />
      <Section.Rows>
        <CardList columns={4} align="center">
          <CardList.Card title="Competitor Affiliate & Influencer Strategy Analysis">
            <Statement>$1,500 one off</Statement>
            <footer>
              <BoldButtonLink
                href="https://competitiveinsigh.spp.io/pay/service/13"
                size="large"
              >
                Purchase
              </BoldButtonLink>
            </footer>
          </CardList.Card>
          <CardList.Card title="Competitor Lead Generation Analysis">
            <Statement>$2,000 one off</Statement>
            <footer>
              <BoldButtonLink
                href="https://competitiveinsigh.spp.io/pay/service/14"
                size="large"
              >
                Purchase
              </BoldButtonLink>
            </footer>
          </CardList.Card>
          <CardList.Card title="Competitor PPC Strategy Analysis">
            <Statement>$2,500 one off</Statement>
            <footer>
              <BoldButtonLink
                href="https://competitiveinsigh.spp.io/pay/service/15"
                size="large"
              >
                Purchase
              </BoldButtonLink>
            </footer>
          </CardList.Card>
          <CardList.Card title="Competitor Email Strategy Analysis">
            <Statement>$3,000 one off</Statement>
            <footer>
              <BoldButtonLink
                href="https://competitiveinsigh.spp.io/pay/service/16"
                size="large"
              >
                Purchase
              </BoldButtonLink>
            </footer>
          </CardList.Card>
        </CardList>
      </Section.Rows>
    </Section>
    <Section bgColor="white">
      <Section.Header
        center
        title="Charity or not-for-profit? Get to 40% off listed pricing when you work with Competitive Insight"
      >
        <BoldButtonLink
          href="https://calendly.com/eleanorbennett/30min?month=2023-11"
          size="large"
          type="secondary"
        >
          Book a Call
        </BoldButtonLink>
      </Section.Header>
    </Section>
    {/* <Section>
      <Section.Header title="FAQs" center />
      <Section.Rows>
        <AccordionList>
          <Accordion>
            <Accordion.Summary>
              <h4>What does this all mean, though?</h4>
            </Accordion.Summary>
            <Accordion.Details>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis vero
                deserunt perspiciatis omnis maxime velit unde suscipit veniam quam,
                voluptatem inventore id cumque sapiente quae eum, consequuntur, alias
                laborum! Optio rem cum commodi sapiente.
              </p>
            </Accordion.Details>
          </Accordion>
          <Accordion>
            <Accordion.Summary>
              <h4>Are you a legit solution for my crappy business practices?</h4>
            </Accordion.Summary>
            <Accordion.Details>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, odit
                labore doloribus amet veritatis eius molestias atque. Inventore magnam
                dolor reiciendis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                ducimus alias minima tenetur consequuntur et magni praesentium deleniti,
                laborum officiis laboriosam quaerat! Animi quasi cum voluptatum ut.
                Maiores praesentium inventore, asperiores eveniet vero accusantium numquam
                provident temporibus tempora atque?
              </p>
            </Accordion.Details>
          </Accordion>
        </AccordionList>
      </Section.Rows>
    </Section> */}
  </Layout>
);

export default PricingPage;
