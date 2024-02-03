interface IPageHeaderProps {
  title: string;
  subTitle?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, subTitle }) => (
  <header className="page-header">
    <h1>{title}</h1>
    <p>{subTitle}</p>
  </header>
);

export default PageHeader;
