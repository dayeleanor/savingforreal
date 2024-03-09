import ButtonLink from "../../components/button-link";
import CardList from "../../components/card-list";
import Layout from "../../components/layout";
import Section from "../../internal/components/section";
import PackageSvg from "../../svgs/package-box.svg";
import StartUpSvg from "../../svgs/startup.svg";
import AnalyticsSvg from "../../svgs/analytics.svg";
import TwoColumnBulletList from "../../components/two-column-bullet-list";
import StepsBulletList from "../../components/steps-bullet-list";
import BoldButtonLink from "../../components/bold-button-link";
import Testimonials from "../../components/testimonials";
import Image from "next/image";
import placeholderImg from "../../public/images/placeholder.jpg";
import { HeadingBlock } from "../../components/content-blocks/heading-block";
import { StatementBlock } from "../../components/content-blocks/statement-block";
import { TextWithLeftImage } from "../../components/content-blocks/text-with-left-image";
import { TextWithRightImage } from "../../components/content-blocks/text-with-right-image";

const ComponentsPage: React.FC = () => (
  <Layout title="Components">
    <HeadingBlock
      heading="This is a preview of the HeadingBlock component"
      background="light-blue"
    >
      <p>
        This is a <b>HeadingBlock</b> with <b>light-blue</b> background style.
      </p>
      <p>
        HeadingBlocks are sections with a background and padding and include a heading.
        They can also optionally include text by adding nested paragraph elements. These
        paragraphs are also larger than and default font size. Use this component if you
        want a heading with larger text.
      </p>
    </HeadingBlock>

    <HeadingBlock
      heading="This is a preview of the HeadingBlock component"
      background="light-green"
    >
      <p>
        This is a <b>HeadingBlock</b> with <b>light-green</b> background style.
      </p>
      <p>
        HeadingBlocks are sections with a background and padding and include a heading.
        They can also optionally include text by adding nested paragraph elements. These
        paragraphs are also larger than and default font size. Use this component if you
        want a heading with larger text.
      </p>
    </HeadingBlock>

    <StatementBlock>
      <p>
        This is a <b>StatementBlock</b> with <b>no</b> background style.
      </p>
      <p>
        StatementBlocks are sections with a background and padding and do not include a
        heading. The text is also larger than and default font size. Use this component if
        you want text to stand out.
      </p>
    </StatementBlock>

    <TextWithLeftImage
      heading="Need help with all your marketing issues, so you just give up instead?"
      image={<Image alt="Placeholder" src={placeholderImg} />}
      background="light"
    >
      <p>
        This is a <b>TextWithLeftImage</b> with <b>light</b> background style.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit cum
        voluptate neque! Nisi, illum obcaecati corrupti odit excepturi necessitatibus?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates
        iusto.
      </p>
    </TextWithLeftImage>
    <TextWithRightImage
      heading="This is the heading"
      image={<Image alt="Placeholder" src={placeholderImg} />}
      background="dark"
    >
      <p>
        This is <b>TextWithRightImage</b> with <b>dark</b> background style.
      </p>
    </TextWithRightImage>
    <TextWithLeftImage
      heading="This is the heading"
      image={<Image alt="Placeholder" src={placeholderImg} />}
      background="white"
    >
      <p>
        This is <b>TextWithLeftImage</b> with <b>white</b> background style.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptates
        iusto.
      </p>
    </TextWithLeftImage>

    <TextWithRightImage
      heading="This is the heading"
      image={<Image alt="Placeholder" src={placeholderImg} />}
      background="medium"
    >
      <p>
        This is <b>TextWithRightImage</b> with <b>medium</b> background style.
      </p>
    </TextWithRightImage>

    <Testimonials />

    <TwoColumnBulletList title="TwoColumnBulletList (white)" white>
      <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo eligendi
        at provident rerum rem quis similique eos nam doloribus!
      </TwoColumnBulletList.Item>
      <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur eos, hic
        ducimus odit repellendus corporis impedit quibusdam, cupiditate deserunt sunt
        alias eveniet nisi molestias explicabo, doloremque sapiente architecto ipsam odio.
      </TwoColumnBulletList.Item>
      <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil saepe, laboriosam
        quo neque tempore, aut rerum laudantium alias culpa quibusdam libero reiciendis.
        Eveniet nostrum officiis fugiat.
      </TwoColumnBulletList.Item>
    </TwoColumnBulletList>

    <TwoColumnBulletList title="TwoColumnBulletList (not white)">
      <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto
        quia optio. Sunt, laudantium vel?
      </TwoColumnBulletList.Item>
      <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos laborum
        molestias!
      </TwoColumnBulletList.Item>
      <TwoColumnBulletList.Item label="TwoColumnBulletList.Item">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut earum perferendis,
        accusantium a beatae fugit vitae suscipit vel nobis.
      </TwoColumnBulletList.Item>
    </TwoColumnBulletList>

    <section>
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
            ipsum dolor sit amet, consectetur adipisicing elit. Nemo perferendis ipsa nam
            voluptate reprehenderit eum aspernatur ea quisquam numquam officiis. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Nemo perferendis ipsa nam
            voluptate reprehenderit eum aspernatur ea quisquam numquam officiis.
          </p>
        </CardList.Card>

        <CardList.Card title="Card 3">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minima
            possimus nemo sapiente assumenda est laboriosam velit eaque!
          </p>
        </CardList.Card>
      </CardList>

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
            ipsa nam voluptate reprehenderit eum aspernatur ea quisquam numquam officiis.
          </p>
        </CardList.Card>

        <CardList.Card title="Card 3" icon={<AnalyticsSvg />}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minima
            possimus nemo sapiente assumenda est laboriosam velit eaque!
          </p>
        </CardList.Card>
      </CardList>

      <StepsBulletList>
        <StepsBulletList.Step step={1} text="Step 1" />
        <StepsBulletList.Step step={2} text="Step 2" />
        <StepsBulletList.Step step={3} text="Step 3" />
        <StepsBulletList.Step step={4} text="Step 4" />
        <StepsBulletList.Step step={5} text="Step 5" />
        <StepsBulletList.Step step={6} text="Step 6" />
      </StepsBulletList>

      <BoldButtonLink size="small" href="#">
        Bold Button Link (small)
      </BoldButtonLink>
      <BoldButtonLink type="secondary" href="#">
        Bold Button Link (secondary)
      </BoldButtonLink>
      <BoldButtonLink href="#">Bold Button Link</BoldButtonLink>
      <ButtonLink href="#">Button Link</ButtonLink>
    </section>
  </Layout>
);

export default ComponentsPage;
