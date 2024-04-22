import Card, { ContentItem } from "./Card";

interface ButtonCardProps {
  title: string;
  contentItem: ContentItem[];
}
// Define the YourReactComponent
const ButtonCard: React.FC<ButtonCardProps> = ({ title, contentItem }) => {
  return <Card title={title} content={contentItem} />;
};

export default ButtonCard;
