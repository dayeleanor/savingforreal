import ButtonLink from "../../components/button-link";
import CardList from "../../components/card-list";
import Layout from "../../components/layout";
import Section from "../../components/layout/section";
import PackageSvg from "../../svgs/package-box.svg";
import StartUpSvg from "../../svgs/startup.svg";
import AnalyticsSvg from "../../svgs/analytics.svg";
import TwoColumnBulletList from "../../components/two-column-bullet-list";
import StepsBulletList from "../../components/steps-bullet-list";
import BoldButtonLink from "../../components/bold-button-link";
import Testimonials from "../../components/testimonials";

const ComponentsPage: React.FC = () => (
  <Layout title="Components">
    <Section bgColor="white">
      <Section.Header title="H1 Centered Header with 1 Column" center>
        <p>This is the header description, paragraph 1</p>
        <p>This is the header description, paragraph 2</p>
        <p>This is the header description, paragraph 3</p>
        <p>This is the header description, paragraph 4</p>
      </Section.Header>
      <Section.Header
        title="H2 Centered Header with 2 Columns"
        columns={2}
        tag="h2"
        center
      >
        <p>This is the header description, paragraph 1</p>
        <p>This is the header description, paragraph 2</p>
        <p>This is the header description, paragraph 3</p>
        <p>This is the header description, paragraph 4</p>
      </Section.Header>
      <Section.Header
        title="H3 Centered Header with 3 Columns"
        columns={3}
        tag="h3"
        center
      >
        <p>This is the header description, paragraph 1</p>
        <p>This is the header description, paragraph 2</p>
        <p>This is the header description, paragraph 3</p>
        <p>This is the header description, paragraph 4</p>
      </Section.Header>
      <Section.Header title="H4 Header with 4 Columns" columns={4} tag="h4">
        <p>This is the header description, paragraph 1</p>
        <p>This is the header description, paragraph 2</p>
        <p>This is the header description, paragraph 3</p>
        <p>This is the header description, paragraph 4</p>
      </Section.Header>
      <Section.Header title="H5 Header with 1 Column" tag="h5">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe blanditiis rerum
          voluptatum quia magni dolorum quam atque eaque nam expedita!
        </p>
      </Section.Header>
      <Section.Header title="H6 Header with 1 Column" tag="h6">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe blanditiis rerum
          voluptatum quia magni dolorum quam atque eaque nam expedita!
        </p>
      </Section.Header>
      <Section.Rows>
        <p>
          This is a Row. The Section.Rows component is similar to Section.Header. It can
          accept a `columns` attribute but it has no special support a titles within the
          header.
        </p>
        <p>You should only have 1 Section.Rows component within 1 Section.</p>
      </Section.Rows>
    </Section>
    <Section bgColor="white">
      <Section.Header
        tag="h4"
        title="The below Section.Rows component has been set to have 4 columns"
      />
      <Section.Rows columns={4}>
        <p>This is Row 1, Column 1</p>
        <p>This is Row 1, Column 2</p>

        <p>This is Row 1, Column 3</p>
        <p>This is Row 1, Column 4</p>
        <p>This is Row 2, Column 1</p>
        <p>This is Row 2, Column 2</p>
        <p>This is Row 2, Column 3</p>
        <p>This is Row 2, Column 4</p>
      </Section.Rows>
    </Section>
    <Testimonials />
    <Section>
      <Section.Header title="This is a Non-White Section" />
      <Section.Rows>
        <h2>CardList with CardList.Card</h2>
        <CardList borders="off" columns={3} align="left">
          <CardList.Card title="Card 1">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quisquam
              molestiae quidem dicta nemo ipsum sunt.
            </p>
            <ButtonLink href="/">ButtonLink</ButtonLink>
          </CardList.Card>
          <CardList.Card title="Card 2" togglable>
            <p>
              Toggleable Cards work with a paragraph element. They only disable the
              paragraphs first 6 lines before showing a `...`. When the toggle button is
              pressed to show more, all the lines are shown. Nemo perferendis ipsa nam
              voluptate reprehenderit eum aspernatur ea quisquam numquam officiis. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Nemo perferendis ipsa
              nam voluptate reprehenderit eum aspernatur ea quisquam numquam officiis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo perferendis
              ipsa nam voluptate reprehenderit eum aspernatur ea quisquam numquam
              officiis.
            </p>
          </CardList.Card>

          <CardList.Card title="Card 3">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minima
              possimus nemo sapiente assumenda est laboriosam velit eaque!
            </p>
          </CardList.Card>
        </CardList>
        <h2>CardList with Card borders and aligned center with icons</h2>
        <CardList borders="on" columns={3} align="center">
          <CardList.Card title="Card 1" icon={<PackageSvg />}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quisquam
              molestiae quidem dicta nemo ipsum sunt.
            </p>
            <ButtonLink href="/">ButtonLink</ButtonLink>
          </CardList.Card>
          <CardList.Card title="Card 2" icon={<StartUpSvg />}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo perferendis
              ipsa nam voluptate reprehenderit eum aspernatur ea quisquam numquam
              officiis.
            </p>
          </CardList.Card>

          <CardList.Card title="Card 3" icon={<AnalyticsSvg />}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minima
              possimus nemo sapiente assumenda est laboriosam velit eaque!
            </p>
          </CardList.Card>
        </CardList>
      </Section.Rows>
    </Section>
    <Section>
      <Section.Header title="Two Column Bullet List" />
      <Section.Rows>
        <TwoColumnBulletList title="TwoColumnBulletList (white)" white>
          <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo
            eligendi at provident rerum rem quis similique eos nam doloribus!
          </TwoColumnBulletList.Item>
          <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eos, hic
            ducimus odit repellendus corporis impedit quibusdam, cupiditate deserunt sunt
            alias eveniet nisi molestias explicabo, doloremque sapiente architecto ipsam
            odio.
          </TwoColumnBulletList.Item>
          <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil saepe,
            laboriosam quo neque tempore, aut rerum laudantium alias culpa quibusdam
            libero reiciendis. Eveniet nostrum officiis fugiat.
          </TwoColumnBulletList.Item>
        </TwoColumnBulletList>
      </Section.Rows>
      <Section.Rows>
        <TwoColumnBulletList title="TwoColumnBulletList (not white)">
          <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto
            quia optio. Sunt, laudantium vel?
          </TwoColumnBulletList.Item>
          <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos
            laborum molestias!
          </TwoColumnBulletList.Item>
          <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut earum
            perferendis, accusantium a beatae fugit vitae suscipit vel nobis.
          </TwoColumnBulletList.Item>
        </TwoColumnBulletList>
      </Section.Rows>
    </Section>
    <Section bgColor="white">
      <Section.Header title="StepsBulletList" tag="h3" />
      <Section.Rows>
        <StepsBulletList>
          <StepsBulletList.Step step={1} text="Step 1" />
          <StepsBulletList.Step step={2} text="Step 2" />
          <StepsBulletList.Step step={3} text="Step 3" />
          <StepsBulletList.Step step={4} text="Step 4" />
          <StepsBulletList.Step step={5} text="Step 5" />
          <StepsBulletList.Step step={6} text="Step 6" />
        </StepsBulletList>
      </Section.Rows>
    </Section>
    <Section>
      <Section.Header title="Buttons" />
      <Section.Rows>
        <BoldButtonLink size="small" href="#">
          Bold Button Link (small)
        </BoldButtonLink>
        <BoldButtonLink type="secondary" href="#">
          Bold Button Link (secondary)
        </BoldButtonLink>
        <BoldButtonLink href="#">Bold Button Link</BoldButtonLink>
        <ButtonLink href="#">Button Link</ButtonLink>
      </Section.Rows>
    </Section>
  </Layout>
);

export default ComponentsPage;
